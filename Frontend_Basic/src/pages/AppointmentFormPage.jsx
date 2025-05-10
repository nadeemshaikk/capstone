import React from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AppointmentFormPage = () => {
  const { providerId } = useParams();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      time: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      date: Yup.string().required('Date is required'),
      time: Yup.string().required('Time is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md mt-10 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment for Provider {providerId}</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input name="name" onChange={formik.handleChange} value={formik.values.name} className="w-full border px-3 py-2 rounded" />
          {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input name="email" onChange={formik.handleChange} value={formik.values.email} className="w-full border px-3 py-2 rounded" />
          {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
        </div>
        <div>
          <label className="block font-medium">Preferred Date</label>
          <input type="date" name="date" onChange={formik.handleChange} value={formik.values.date} className="w-full border px-3 py-2 rounded" />
          {formik.touched.date && formik.errors.date && <p className="text-red-500 text-sm">{formik.errors.date}</p>}
        </div>
        <div>
          <label className="block font-medium">Preferred Time</label>
          <input type="time" name="time" onChange={formik.handleChange} value={formik.values.time} className="w-full border px-3 py-2 rounded" />
          {formik.touched.time && formik.errors.time && <p className="text-red-500 text-sm">{formik.errors.time}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentFormPage;
