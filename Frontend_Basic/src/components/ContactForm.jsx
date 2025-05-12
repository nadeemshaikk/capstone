// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name*</label>
            <input
              type="text"
              placeholder="Jackson Mile"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone*</label>
            <input
              type="tel"
              placeholder="Ex- +880-13* ** ***"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email (Optional)</label>
            <input
              type="email"
              placeholder="Ex- info@gmail.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Subject*</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Short Notes*</label>
            <textarea
              placeholder="Write Something..."
              className="w-full border border-gray-300 rounded-md p-2 h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
