import React from 'react';
import { useFormik } from 'formik';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddServicePage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      services: '',
      price: '',
      availability: '',
    },
    onSubmit: (values) => {
      console.log('Submitted Service:', values);
      alert('Service submitted successfully!');
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar />
      <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6 text-center">Add Your Service</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Service Center Name</label>
            <input
              name="name"
              placeholder="Enter name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Address</label>
            <input
              name="address"
              placeholder="Enter address"
              onChange={formik.handleChange}
              value={formik.values.address}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Services Offered</label>
            <textarea
              name="services"
              placeholder="E.g., Oil Change, Tire Replacement"
              onChange={formik.handleChange}
              value={formik.values.services}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Starting Price</label>
            <input
              name="price"
              placeholder="Enter price"
              onChange={formik.handleChange}
              value={formik.values.price}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Availability</label>
            <input
              name="availability"
              placeholder="E.g., Mon-Fri 9am-6pm"
              onChange={formik.handleChange}
              value={formik.values.availability}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700 hover:shadow-lg transition-all font-semibold"
          >
            Submit Service
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddServicePage;
