// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const ServiceHomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="container mx-auto py-16 px-4 text-center">
//         <h1 className="text-4xl font-bold mb-8">Services</h1>
//         <div className="flex justify-center gap-10">
//           <button
//             onClick={() => navigate('/services/user')}
//             className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-4 rounded-md shadow-md transition"
//           >
//             Explore Services
//           </button>
//           <button
//             onClick={() => navigate('/services/provider')}
//             className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-4 rounded-md shadow-md transition"
//           >
//             Add Service
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ServiceHomePage;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceHomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div 
        className={`container mx-auto py-16 px-4 text-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-4xl font-serif font-bold mb-6">Explore Our Premium Services</h1>
        <p className="text-md mb-10">
          Whether you're looking to buy, sell, or service your vehicle, we provide top-quality services tailored just for you.
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate('/services/user')}
            className="border border-gray-800 text-gray-800 px-6 py-3 rounded hover:bg-gray-800 hover:text-white transition"
          >
            Explore Services
          </button>
          <button
            onClick={() => navigate('/services/provider')}
            className="border border-gray-800 text-gray-800 px-6 py-3 rounded hover:bg-gray-800 hover:text-white transition"
          >
            Add Service
          </button>
        </div>
      </div>

      {/* Featured Services Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-serif font-bold mb-12">Featured Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 border rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">Vehicle Inspection</h3>
              <p className="text-sm mb-4">Ensure your vehicle is road-ready with our comprehensive inspection services.</p>
              <button
                onClick={() => navigate('/services/user')}
                className="text-sm border border-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition"
              >
                Learn More
              </button>
            </div>
            <div className="p-6 border rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">Car Repairs & Maintenance</h3>
              <p className="text-sm mb-4">Skilled technicians ready to maintain or repair your vehicle using quality parts.</p>
              <button
                onClick={() => navigate('/services/user')}
                className="text-sm border border-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition"
              >
                Learn More
              </button>
            </div>
            <div className="p-6 border rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">Car Detailing</h3>
              <p className="text-sm mb-4">Bring back the shine with professional interior and exterior detailing.</p>
              <button
                onClick={() => navigate('/services/user')}
                className="text-sm border border-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-serif font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Choose a Service", "Book an Appointment", "Get the Service", "Enjoy Your Car"].map((step, idx) => (
              <div key={idx} className="p-6 border bg-white rounded shadow-sm hover:shadow transition">
                <h3 className="text-lg font-medium mb-3">{step}</h3>
                <p className="text-sm text-gray-600">
                  {[
                    "Browse our offerings and find what suits your needs.",
                    "Pick a date and time that works for you.",
                    "Let our professionals handle everything.",
                    "Drive with confidence and comfort.",
                  ][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-10">Customer Testimonials</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                quote: "The service was excellent! My car feels brand new.",
                name: "John Doe",
              },
              {
                quote: "Top-notch detailing! I couldn’t be happier.",
                name: "Jane Smith",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded shadow max-w-sm">
                <p className="text-sm mb-4 italic">“{t.quote}”</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">Verified Customer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-200 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Get Started Today!</h2>
        <p className="mb-6">Ready for better service? Schedule your appointment now.</p>
        <button
          onClick={() => navigate('/services/user')}
          className="px-6 py-3 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"
        >
          Book Your Service
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceHomePage;

