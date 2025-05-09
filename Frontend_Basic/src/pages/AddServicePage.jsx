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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto py-10 px-4 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Add Your Service</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input name="name" placeholder="Service Center Name" onChange={formik.handleChange} value={formik.values.name} className="w-full p-2 border rounded" />
          <input name="address" placeholder="Address" onChange={formik.handleChange} value={formik.values.address} className="w-full p-2 border rounded" />
          <textarea name="services" placeholder="Services Offered (comma separated)" onChange={formik.handleChange} value={formik.values.services} className="w-full p-2 border rounded" />
          <input name="price" placeholder="Starting Price" onChange={formik.handleChange} value={formik.values.price} className="w-full p-2 border rounded" />
          <input name="availability" placeholder="Availability (e.g., Mon-Fri 9am-6pm)" onChange={formik.handleChange} value={formik.values.availability} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddServicePage;
