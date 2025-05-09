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
    { id: 2, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://th.bing.com/th/id/R.e0a6fdd11b22b229afc66d10446879f1?rik=r3Fxu8TphhQqsg&riu=http%3a%2f%2fwww.colliersnews.com%2fwp-content%2fuploads%2f2018%2f02%2fcar-mods-main.jpg&ehk=SQhkLUQZk4YMDcxrdEq3UaLel9pjTW29lyuzkYoo594%3d&risl=&pid=ImgRaw&r=0'},
    { id: 3, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://tse4.mm.bing.net/th/id/OIP.QUWisSzJeFrjQY-vvmJg1wHaLH?pid=ImgDet&w=474&h=711&rs=1' },
    { id: 4, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://images.unsplash.com/photo-1593055339366-26882b66e012?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' },
    { id: 5, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://tse4.mm.bing.net/th/id/OIP.fiQfhJguT3GPigR80WE2MwHaFS?pid=ImgDet&w=474&h=338&rs=1' },
    { id: 6, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://tse1.mm.bing.net/th/id/OIP.FhhUR_LRUgPjPTZYJIlb_gHaJQ?pid=ImgDet&w=474&h=592&rs=1' },
    { id: 7, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://tse4.mm.bing.net/th/id/OIP.VEjrBYCY6U2Qw6q7QLjlNwHaLH?pid=ImgDet&w=474&h=711&rs=1' },
    { id: 8, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://th.bing.com/th/id/R.b6b726a13fd61becf748722532c66ce0?rik=Rb%2fvw94qu%2fjbGQ&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1580446623001-3abf670c5c55%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8MXx8cmVkJTIwY2FyfHwwfHx8fDE2MjkzMDEyNDA%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=6Ccf5W0NwdML7u73Uo05H%2bDwKINyyztcgLKyuEKKhWI%3d&risl=&pid=ImgRaw&r=0' },
    { id: 9, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://tse1.mm.bing.net/th/id/OIP.nxHEJNJbXEHNPjPzTaSE1AHaEK?rs=1&pid=ImgDetMain' },
    { id: 10, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://essenceofqatar.com/wp-content/uploads/2020/06/73533130_434939563888523_1567191024659333120_n.jpg' },
    { id: 11, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://th.bing.com/th/id/R.117e88acbfd9dc7b597d7c72c5555384?rik=HWns5GQxBXd2bQ&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1520050206274-a1ae44613e6d%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=OycApRRpU5iDrX2qkwk%2fNkRvm2%2f3Megw55T2qMrCqk8%3d&risl=&pid=ImgRaw&r=0' },
    { id: 12, name: 'Toyota Camry 2023', price: '$25,000', mileage: '50,000 miles', image: 'https://tse3.mm.bing.net/th/id/OIP.396pm2lwpgb1_iar7lL78AHaEo?rs=1&pid=ImgDetMain' },

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
