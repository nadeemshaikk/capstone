// src/components/ContactHero.jsx
import React from 'react';
import { Star } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 md:px-20 text-center md:text-left shadow-md rounded-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-700 mb-6">
          We're here to help you with any information or support you need.
        </p>

        {/* Trust Rating Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-10">
          {/* Block 1 */}
          <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition">
            <Star className="text-yellow-400 w-6 h-6" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Trust Rating 5.0</p>
              <p className="text-sm text-gray-500">2,348 Reviews</p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition">
            <Star className="text-yellow-400 w-6 h-6" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Trusted by Clients</p>
              <p className="text-sm text-gray-500">Across 15+ Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
