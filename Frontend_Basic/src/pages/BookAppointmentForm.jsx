import React from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const BookAppointmentForm = () => {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      time: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      date: Yup.string().required('Select a date'),
      time: Yup.string().required('Select a time')
    }),
    onSubmit: (values) => {
      alert(`Appointment booked for Service Provider #${id}:\n${JSON.stringify(values, null, 2)}`);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4 py-8">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg transition-all"
      >
        <div className="flex items-center gap-2 mb-6">
          <CalendarDaysIcon className="w-6 h-6 text-green-600" />
          <h1 className="text-2xl font-serif font-semibold text-gray-800">
            Book Appointment - Provider #{id}
          </h1>
        </div>

        {['name', 'email', 'date', 'time'].map((field) => (
          <div className="mb-5" key={field}>
            <label className="block mb-1 text-gray-700 font-medium capitalize">{field}</label>
            <input
              name={field}
              type={field === 'email' ? 'email' : field === 'date' ? 'date' : field === 'time' ? 'time' : 'text'}
              onChange={formik.handleChange}
              value={formik.values[field]}
              className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                formik.errors[field] ? 'border-red-500' : ''
              }`}
            />
            {formik.errors[field] && (
              <p className="text-sm text-red-500 mt-1">{formik.errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium shadow-md hover:shadow-lg transition-all"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
