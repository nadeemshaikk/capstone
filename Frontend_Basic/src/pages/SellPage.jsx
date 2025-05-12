import React from 'react';

import { Upload, Camera } from 'lucide-react';

const SellPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">


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
                    <input type="text" className="w-full border rounded-md p-2" placeholder="e.g., Toyota" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                    <input type="text" className="w-full border rounded-md p-2" placeholder="e.g., Camry" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <input type="number" className="w-full border rounded-md p-2" placeholder="e.g., 2023" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
                    <input type="number" className="w-full border rounded-md p-2" placeholder="e.g., 50000" />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Asking Price ($)</label>
                  <input type="number" className="w-full border rounded-md p-2" placeholder="e.g., 25000" />
                </div>
              </div>

              {/* Upload Documents & Photos */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Upload Documents & Photos</h2>

                {/* Upload Documents */}
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center mb-4">
                  <Upload className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <p className="text-gray-600 mb-2">Upload vehicle documents</p>
                  <input type="file" className="hidden" id="document-upload" />
                  <label
                    htmlFor="document-upload"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer inline-block"
                  >
                    Choose Documents
                  </label>
                </div>

                {/* Upload Photos */}
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center">
                  <Camera className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <p className="text-gray-600 mb-2">Upload vehicle photos</p>
                  <input type="file" className="hidden" id="photo-upload" multiple />
                  <label
                    htmlFor="photo-upload"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer inline-block"
                  >
                    Choose Photos
                  </label>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full border rounded-md p-2" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full border rounded-md p-2" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full border rounded-md p-2" placeholder="Your phone number" />
                  </div>

                  {/* Upload User Photo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Your Photo</label>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center mb-4">
                      <Camera className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                      <p className="text-gray-600 mb-2">Upload a recent passport-size photo</p>
                      <input type="file" className="hidden" id="user-photo-upload" />
                      <label
                        htmlFor="user-photo-upload"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer inline-block"
                      >
                        Choose Photo
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Verification */}
              <div>
                <h2 className="text-xl font-semibold mb-4">User Verification</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Verification ID Type</label>
                    <select className="w-full border rounded-md p-2">
                      <option value="aadhar">Aadhar Card</option>
                      <option value="license">Driver's License</option>
                      <option value="passport">Passport</option>
                      <option value="voterId">Voter ID</option>
                      <option value="pan">PAN Card</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Verification ID Image</label>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center mb-4">
                      <Camera className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                      <p className="text-gray-600 mb-2">Upload your verification ID image</p>
                      <input type="file" className="hidden" id="verification-id-upload" />
                      <label
                        htmlFor="verification-id-upload"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer inline-block"
                      >
                        Choose Image
                      </label>
                    </div>
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

    </div>
  );
};

export default SellPage;
