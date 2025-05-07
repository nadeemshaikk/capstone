import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BuyPage = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota Camry 2023',
      price: '$25,000',
      mileage: '50,000 miles',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80',
    },
    // Add more car objects as needed
    { id: 2, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80' },
    { id: 3, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80' },
    { id: 4, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80' },
    { id: 5, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80' },
    { id: 6, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Find Your Perfect Car</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <input type="range" className="w-full" min="0" max="100000" step="1000" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select className="w-full border rounded-md p-2">
                  <option>All Years</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                <select className="w-full border rounded-md p-2">
                  <option>All Makes</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>BMW</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Car Listings */}
          <section className="md:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-2">{car.price}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{car.mileage}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyPage;
