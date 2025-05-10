import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Role</h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role) => (
            <Link key={role.title} to={role.path}>
              <div className={`rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer ${role.color}`}>
                <h2 className="text-2xl font-semibold mb-2">{role.title}</h2>
                <p>{role.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DashboardPage;
