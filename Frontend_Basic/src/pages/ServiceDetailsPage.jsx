import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-10 flex flex-1 flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Auto Care Center #{id}</h1>
          <p className="text-gray-600 mt-2">123 Service Street, Car City</p>
          <p className="text-yellow-600 mt-1">⭐ 4.8 (Based on 120 reviews)</p>
        </div>

        <div className="w-full max-w-2xl bg-white shadow rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services Offered</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Oil Change - $49.99</li>
            <li>Brake Service - $199.99</li>
            <li>Tire Rotation - $29.99</li>
            <li>Full Vehicle Inspection - $129.99</li>
            <li>Battery Replacement - $89.99</li>
            <li>Transmission Fluid Check - $79.99</li>
          </ul>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Book Appointment
        </button>

        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity duration-300"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold text-gray-800 mb-4">Book Appointment</h2>
              <Formik
                initialValues={{
                  serviceType: '',
                  date: '',
                  timeSlot: '',
                  contact: '',
                }}
                validationSchema={Yup.object({
                  serviceType: Yup.string().required('Service type is required'),
                  date: Yup.date()
                    .required('Date is required')
                    .min(new Date().toISOString().split('T')[0], 'Date cannot be in the past'),
                  timeSlot: Yup.string().required('Time slot is required'),
                  contact: Yup.string().required('Contact is required').min(5, 'Too short!'),
                })}
                onSubmit={(values, { resetForm }) => {
                  console.log('Booking Details:', values);
                  alert('Appointment booked successfully!');
                  resetForm();
                  setShowModal(false);
                }}
              >
                <Form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                    <Field as="select" name="serviceType" className="w-full border rounded px-3 py-2">
                      <option value="">Select Service</option>
                      <option value="Oil Change">Oil Change</option>
                      <option value="Brake Service">Brake Service</option>
                      <option value="Tire Rotation">Tire Rotation</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Inspection">Inspection</option>
                      <option value="Repair">Repair</option>
                    </Field>
                    <ErrorMessage name="serviceType" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <Field type="date" name="date" className="w-full border rounded px-3 py-2" />
                    <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                    <Field as="select" name="timeSlot" className="w-full border rounded px-3 py-2">
                      <option value="">Select Time Slot</option>
                      <option value="09:00 - 10:00">09:00 - 10:00</option>
                      <option value="10:00 - 11:00">10:00 - 11:00</option>
                      <option value="11:30 - 12:30">11:30 - 12:30</option>
                      <option value="12:30 - 1:30">12:30 - 1:30</option>
                      <option value="3:00 - 4:00">3:00 - 4:00</option>
                      <option value="4:00 - 5:00">4:00 - 5:00</option>
                      <option value="5:30 - 6:30">5:30 - 6:30</option>
                    </Field>
                    <ErrorMessage name="timeSlot" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Contact</label>
                    <Field type="text" name="contact" className="w-full border rounded px-3 py-2" />
                    <ErrorMessage name="contact" component="div" className="text-red-500 text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Confirm Appointment
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        )}

        <div className="w-full max-w-2xl mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What Our Customers Say</h2>
          <div className="space-y-6">
            {[
              {
                quote: 'The service was outstanding! I had a tire rotation and oil change done in record time.',
                name: 'John Doe',
              },
              {
                quote: 'Friendly staff and excellent service. I trust them with all my car maintenance needs.',
                name: 'Sarah Lee',
              },
              {
                quote: "Fast, efficient, and affordable. The best auto care center I've been to!",
                name: 'David Green',
              },
            ].map((review, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-5">
                <p className="text-gray-700 italic">"{review.quote}"</p>
                <p className="text-gray-500 mt-2 text-right">– {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
