import React from 'react';
import { Link } from 'react-router-dom';


function DashboardPage() {
  const roles = [
    {
      title: 'Admin',
      description: 'Manage users, vehicles, and reports',
      path: '/admin',
      color: 'bg-red-100 text-red-700',
    },
    {
      title: 'Buyer',
      description: 'Explore and compare cars',
      path: '/buy',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Seller',
      description: 'List your car for sale',
      path: '/sell',
      color: 'bg-green-100 text-green-700',
    },
    {
      title: 'Service Provider',
      description: 'Offer car services to customers',
      path: '/services/provider',
      color: 'bg-yellow-100 text-yellow-700',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <main className="flex-grow py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Role</h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role) => (
            <Link key={role.title} to={role.path} className="block">
              {role.title === 'Admin' ? (
                <div className={`rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out ${role.color} border border-red-300`}>
                  <h2 className="text-2xl font-semibold mb-2">{role.title}</h2>
                  <p>{role.description}</p>
                  <p className="mt-4 text-sm font-medium">Click here to access admin features.</p>
                </div>
              ) : (
                <div className={`rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer ${role.color}`}>
                  <h2 className="text-2xl font-semibold mb-2">{role.title}</h2>
                  <p>{role.description}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}

export default DashboardPage;
