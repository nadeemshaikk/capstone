import React from 'react';
import { useNavigate } from 'react-router-dom';


const ServiceHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="flex justify-center gap-10">
          <button
            onClick={() => navigate('/services/user')}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-4 rounded-md shadow-md transition"
          >
            Explore Services
          </button>
          <button
            onClick={() => navigate('/services/provider')}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-4 rounded-md shadow-md transition"
          >
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHomePage;
