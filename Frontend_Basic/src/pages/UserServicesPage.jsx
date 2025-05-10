// import { Link } from 'react-router-dom';
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Star, MapPin, Calendar } from 'lucide-react';

// const UserServicesPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8">Car Services</h1>

//         {/* Search and Filter */}
//         <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
//           <div className="grid md:grid-cols-4 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
//               <select className="w-full border rounded-md p-2">
//                 <option>All Services</option>
//                 <option>Inspection</option>
//                 <option>Repair</option>
//                 <option>Maintenance</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//               <input
//                 type="text"
//                 className="w-full border rounded-md p-2"
//                 placeholder="Enter your location"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//               <input
//                 type="date"
//                 className="w-full border rounded-md p-2"
//               />
//             </div>
//             <div className="flex items-end">
//               <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Service Providers */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[1, 2, 3, 4, 5, 6].map((provider) => (
//             <div key={provider} className="bg-white rounded-lg shadow-sm overflow-hidden">
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-semibold">Auto Care Center</h3>
//                   <div className="flex items-center">
//                     <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                     <span className="ml-1">4.8</span>
//                   </div>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center text-gray-600">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     <span>123 Service Street, Car City</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span>Available Today</span>
//                   </div>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex justify-between text-sm">
//                     <span>Oil Change</span>
//                     <span>$49.99</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span>Brake Service</span>
//                     <span>$199.99</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span>Tire Rotation</span>
//                     <span>$29.99</span>
//                   </div>
//                 </div>

//                 <Link to={`/services/${provider}`} className="text-blue-500 underline">
//                   View Details
//                 </Link>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default UserServicesPage;


import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, MapPin, Calendar } from 'lucide-react';

const UserServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-serif">
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-10 text-center border-b pb-4">Available Car Services</h1>

        {/* Search and Filter */}
        <div className="bg-gray-50 border border-gray-200 p-6 rounded mb-10">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Service Type</label>
              <select className="w-full border border-gray-300 rounded p-2 bg-white focus:outline-none focus:ring focus:border-blue-400">
                <option>All Services</option>
                <option>Inspection</option>
                <option>Repair</option>
                <option>Maintenance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Service Providers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((provider) => (
            <div
              key={provider}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition"
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Auto Care Center</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">4.8</span>
                  </div>
                </div>

                <div className="text-sm text-gray-700 mb-4 space-y-1">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span>123 Service Street, Car City</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Available Today</span>
                  </div>
                </div>

                <ul className="text-sm border-t pt-3 space-y-1 text-gray-800">
                  <li className="flex justify-between">
                    <span>Oil Change</span>
                    <span>$49.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Brake Service</span>
                    <span>$199.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tire Rotation</span>
                    <span>$29.99</span>
                  </li>
                </ul>

                <div className="mt-4">
                  <Link
                    to={`/services/${provider}`}
                    className="inline-block text-blue-700 hover:underline text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserServicesPage;

