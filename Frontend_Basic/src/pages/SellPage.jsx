import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SellPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Sell Your Car</h1>
          
          <form className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              {/* Vehicle Details */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Vehicle Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                    <input 
                      type="text"
                      className="w-full border rounded-md p-2"
                      placeholder="e.g., Toyota"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                    <input 
                      type="text"
                      className="w-full border rounded-md p-2"
                      placeholder="e.g., Camry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <input 
                      type="number"
                      className="w-full border rounded-md p-2"
                      placeholder="e.g., 2023"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
                    <input 
                      type="number"
                      className="w-full border rounded-md p-2"
                      placeholder="e.g., 50000"
                    />
                  </div>
                </div>
              </div>
              
              {/* Price */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Asking Price ($)</label>
                  <input 
                    type="number"
                    className="w-full border rounded-md p-2"
                    placeholder="e.g., 25000"
                  />
                </div>
              </div>
              
              {/* Photos */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Photos</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-gray-600">Drag and drop photos here or click to upload</p>
                  <input type="file" className="hidden" multiple accept="image/*" />
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text"
                      className="w-full border rounded-md p-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email"
                      className="w-full border rounded-md p-2"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel"
                      className="w-full border rounded-md p-2"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                List Your Car
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SellPage;
