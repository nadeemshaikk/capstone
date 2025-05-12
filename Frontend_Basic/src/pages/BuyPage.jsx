// import React, { useState } from 'react'; 
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const BuyPage = () => {
//   const exchangeRate = 83; // Current exchange rate: 1 USD = 83 INR
  
//   const cars = [
//     { id: 1, name: 'Toyota Camry 2023', price: 25000, mileage: '50,000 miles', year: 2023, make: 'Toyota', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80' },
//     { id: 2, name: 'Honda Accord 2022', price: 22000, mileage: '40,000 miles', year: 2022, make: 'Honda', image: 'https://th.bing.com/th/id/OIP.QUWisSzJeFrjQY-vvmJg1wHaLH?pid=ImgDet&w=474&h=711&rs=1' },
//     { id: 3, name: 'BMW 3 Series 2024', price: 45000, mileage: '10,000 miles', year: 2024, make: 'BMW', image: 'https://images.unsplash.com/photo-1593055339366-26882b66e012?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080' },
//     { id: 4, name: 'Toyota Corolla 2022', price: 20000, mileage: '30,000 miles', year: 2022, make: 'Toyota', image: 'https://tse4.mm.bing.net/th/id/OIP.fiQfhJguT3GPigR80WE2MwHaFS?pid=ImgDet&w=474&h=338&rs=1' },
//     { id: 5, name: 'Honda Civic 2023', price: 23000, mileage: '20,000 miles', year: 2023, make: 'Honda', image: 'https://tse1.mm.bing.net/th/id/OIP.FhhUR_LRUgPjPTZYJIlb_gHaJQ?pid=ImgDet&w=474&h=592&rs=1' },
//     { id: 6, name: 'BMW X5 2023', price: 55000, mileage: '15,000 miles', year: 2023, make: 'BMW', image: 'https://essenceofqatar.com/wp-content/uploads/2020/06/73533130_434939563888523_1567191024659333120_n.jpg' },
//   ];

//   // 🔧 Filter States
//   const [priceRange, setPriceRange] = useState(100000);
//   const [selectedYear, setSelectedYear] = useState('All');
//   const [selectedMake, setSelectedMake] = useState('All');

//   // 🧠 Filter logic
//   const filteredCars = cars.filter(car => {
//     const matchPrice = car.price <= priceRange;
//     const matchYear = selectedYear === 'All' || car.year.toString() === selectedYear;
//     const matchMake = selectedMake === 'All' || car.make === selectedMake;
//     return matchPrice && matchYear && matchMake;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8">Find Your Perfect Car</h1>

//         <div className="grid md:grid-cols-4 gap-8">
//           {/* Filters Sidebar */}
//           <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Filters</h2>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Price Range: ₹{priceRange * exchangeRate}</label>
//                 <input
//                   type="range"
//                   className="w-full"
//                   min="0"
//                   max="100000"
//                   step="1000"
//                   value={priceRange}
//                   onChange={(e) => setPriceRange(Number(e.target.value))}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                 <select
//                   className="w-full border rounded-md p-2"
//                   value={selectedYear}
//                   onChange={(e) => setSelectedYear(e.target.value)}
//                 >
//                   <option>All</option>
//                   <option>2024</option>
//                   <option>2023</option>
//                   <option>2022</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
//                 <select
//                   className="w-full border rounded-md p-2"
//                   value={selectedMake}
//                   onChange={(e) => setSelectedMake(e.target.value)}
//                 >
//                   <option>All</option>
//                   <option>Toyota</option>
//                   <option>Honda</option>
//                   <option>BMW</option>
//                 </select>
//               </div>
//             </div>
//           </aside>

//           {/* Car Listings */}
//           <section className="md:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCars.length > 0 ? (
//               filteredCars.map((car) => (
//                 <div key={car.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
//                   <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
//                     <p className="text-gray-600 mb-2">₹{car.price * exchangeRate}</p>
//                     <div className="flex justify-between items-center">
//                       <span className="text-sm text-gray-500">{car.mileage}</span>
//                       <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">No cars match your filters.</p>
//             )}
//           </section>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BuyPage;import React, { useState } from 'react';  
import React, { useState } from 'react';  

import { Link } from 'react-router-dom';

const BuyPage = () => {
  const exchangeRate = 83; // Current exchange rate: 1 USD = 83 INR
  
  const cars = [
    { 
      id: 1, name: 'Toyota Camry 2023', price: 25000, mileage: '50,000 miles', year: 2023, make: 'Toyota', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&q=80', 
      model: 'Camry 2023', door: 4, engine: '2.5L', color: 'Red', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Petrol', cylinders: 4, transmission: 'Automatic', wheels: 4
    },
    { 
      id: 2, name: 'Honda Accord 2022', price: 22000, mileage: '40,000 miles', year: 2022, make: 'Honda', image: 'https://th.bing.com/th/id/OIP.QUWisSzJeFrjQY-vvmJg1wHaLH?pid=ImgDet&w=474&h=711&rs=1', 
      model: 'Accord 2022', door: 4, engine: '2.4L', color: 'White', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Petrol', cylinders: 4, transmission: 'Automatic', wheels: 4
    },
    { 
      id: 3, name: 'BMW 3 Series 2024', price: 45000, mileage: '10,000 miles', year: 2024, make: 'BMW', image: 'https://images.unsplash.com/photo-1593055339366-26882b66e012?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080', 
      model: '3 Series 2024', door: 4, engine: '3.0L', color: 'Black', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Petrol', cylinders: 6, transmission: 'Automatic', wheels: 4
    },
    { 
      id: 4, name: 'Toyota Corolla 2022', price: 20000, mileage: '30,000 miles', year: 2022, make: 'Toyota', image: 'https://tse4.mm.bing.net/th/id/OIP.fiQfhJguT3GPigR80WE2MwHaFS?pid=ImgDet&w=474&h=338&rs=1', 
      model: 'Corolla 2022', door: 4, engine: '1.8L', color: 'Silver', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Petrol', cylinders: 4, transmission: 'Manual', wheels: 4
    },
    { 
      id: 5, name: 'Honda Civic 2023', price: 23000, mileage: '20,000 miles', year: 2023, make: 'Honda', image: 'https://tse1.mm.bing.net/th/id/OIP.FhhUR_LRUgPjPTZYJIlb_gHaJQ?pid=ImgDet&w=474&h=592&rs=1', 
      model: 'Civic 2023', door: 4, engine: '2.0L', color: 'Blue', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Petrol', cylinders: 4, transmission: 'Manual', wheels: 4
    },
    { 
      id: 6, name: 'BMW X5 2023', price: 55000, mileage: '15,000 miles', year: 2023, make: 'BMW', image: 'https://essenceofqatar.com/wp-content/uploads/2020/06/73533130_434939563888523_1567191024659333120_n.jpg', 
      model: 'X5 2023', door: 4, engine: '3.0L', color: 'White', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Diesel', cylinders: 6, transmission: 'Automatic', wheels: 4
    },
    { 
      id: 7, name: 'Audi A6 2023', price: 49000, mileage: '5,000 miles', year: 2023, make: 'Audi', image: 'https://tse1.mm.bing.net/th/id/OIP.qII09Etdx1KGhXMifTGc2gHaFj?rs=1&pid=ImgDetMain', 
      model: 'A6 2023', door: 4, engine: '2.0L', color: 'Grey', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Petrol', cylinders: 4, transmission: 'Automatic', wheels: 4
    },
    { 
      id: 8, name: 'Mercedes-Benz C-Class 2022', price: 48000, mileage: '25,000 miles', year: 2022, make: 'Mercedes', image: 'https://tse4.mm.bing.net/th/id/OIP.trLm1ud1_-2urmprmRHSzgHaDs?rs=1&pid=ImgDetMain', 
      model: 'C-Class 2022', door: 4, engine: '2.0L', color: 'Black', repair: 'No', steering: 'Left', seatingCapacity: 5, fuelType: 'Diesel', cylinders: 4, transmission: 'Automatic', wheels: 4
    },
  ];

  // 🔧 Filter States
  const [priceRange, setPriceRange] = useState(100000);
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMake, setSelectedMake] = useState('All');

  // 🧠 Filter logic
  const filteredCars = cars.filter(car => {
    const matchPrice = car.price <= priceRange;
    const matchYear = selectedYear === 'All' || car.year.toString() === selectedYear;
    const matchMake = selectedMake === 'All' || car.make === selectedMake;
    return matchPrice && matchYear && matchMake;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Find Your Perfect Car</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range: ₹{priceRange * exchangeRate}</label>
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="100000"
                  step="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select
                  className="w-full border rounded-md p-2"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option>All</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                <select
                  className="w-full border rounded-md p-2"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                >
                  <option>All</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>BMW</option>
                  <option>Audi</option>
                  <option>Mercedes</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Car Listings */}
          <section className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white shadow-lg rounded-lg p-6">
                  <img src={car.image} alt={car.name} className="w-full h-56 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-2">Price: ₹{(car.price * exchangeRate).toLocaleString()}</p>
                  <p className="text-gray-600 mb-2">Mileage: {car.mileage}</p>
                  <Link to={`/car-details/${car.id}`} className="text-blue-500">View Details</Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

    </div>
  );
};

export default BuyPage;
