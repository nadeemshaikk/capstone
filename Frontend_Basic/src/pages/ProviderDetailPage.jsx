import React from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProviderDetailPage = () => {
  const { providerId } = useParams();

  // Dummy data (replace with actual fetch logic later)
  const provider = {
    name: 'Auto Care Center',
    rating: 4.8,
    address: '123 Service Street, Car City',
    availability: 'Mon-Sat, 9am - 6pm',
    services: [
      { name: 'Oil Change', price: '$49.99' },
      { name: 'Brake Service', price: '$199.99' },
      { name: 'Tire Rotation', price: '$29.99' },
    ],
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      service: '',
      date: '',
      time: '',
    },
    onSubmit: (values) => {
      console.log('Appointment:', values);
      alert('Appointment booked successfully!');
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{provider.name}</h1>
        <p className="text-gray-600 mb-2">📍 {provider.address}</p>
        <p className="text-gray-600 mb-6">🕒 {provider.availability}</p>

        <h2 className="text-xl font-semibold mb-3">Available Services</h2>
        <ul className="mb-8 space-y-2">
          {provider.services.map((srv, idx) => (
            <li key={idx} className="flex justify-between border-b pb-2 text-sm">
              <span>{srv.name}</span>
              <span>{srv.price}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-md bg-white p-6 rounded shadow">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full border p-2 rounded"
            required
          />
          <select
            name="service"
            onChange={formik.handleChange}
            value={formik.values.service}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Service</option>
            {provider.services.map((srv, idx) => (
              <option key={idx} value={srv.name}>
                {srv.name}
              </option>
            ))}
          </select>
          <input
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="time"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.time}
            className="w-full border p-2 rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Confirm Booking
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ProviderDetailPage;
