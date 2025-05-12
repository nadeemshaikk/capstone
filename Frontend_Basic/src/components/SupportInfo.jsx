// src/components/SupportInfo.jsx
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const SupportInfo = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Us With Support Line</h3>
        <p className="text-gray-700 mb-2">To Know More</p>
        <div className="flex flex-col items-center mb-4">
          <Mail className="text-blue-600 mb-1" />
          <span className="text-gray-700">info@example.com</span>
        </div>
        <div className="flex flex-col items-center mb-4">
          <MapPin className="text-blue-600 mb-1" />
          <span className="text-gray-700">
            Road-03, House-123/124, New York.
          </span>
        </div>
        <p className="text-sm text-gray-500">
          N:B: Customer support always open at 9 am to 6 pm every day
        </p>
      </div>
    </section>
  );
};

export default SupportInfo;
