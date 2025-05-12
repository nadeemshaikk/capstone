// src/components/OfficeLocations.jsx
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const offices = [
  {
    city: 'Dhaka, Bangladesh',
    address: 'Canada City, Office-02, Road-11, House-3B/B, Section-H',
    phones: ['+880 566 1111 985', '+880 657 1111 576'],
  },
  {
    city: 'New Delhi, India',
    address: 'Canada City, Office-02, Road-11, House-3B/B, Section-H',
    phones: ['+880 566 1111 985', '+880 657 1111 576'],
  },
  {
    city: 'City of Panama',
    address: 'Canada City, Office-02, Road-11, House-3B/B, Section-H',
    phones: ['+880 566 1111 985', '+880 657 1111 576'],
  },
];

const OfficeLocations = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Offices</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{office.city}</h4>
              <p className="text-gray-600 mb-2 flex items-center">
                <MapPin className="mr-2 text-blue-600" />
                {office.address}
              </p>
              {office.phones.map((phone, idx) => (
                <p key={idx} className="text-gray-600 flex items-center">
                  <Phone className="mr-2 text-blue-600" />
                  {phone}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
