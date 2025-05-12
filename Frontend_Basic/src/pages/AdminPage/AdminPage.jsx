
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function AdminPage() {
  const roles = [
    {
      title: 'Admin',
      description: 'Manage users, vehicles, and reports',
      path: '/admin',
      color: 'bg-red-100 text-red-700',
    },
    {
      title: 'Manage Users',
      description: 'View, add, edit, and delete user accounts.',
      path: '/admin/users',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Manage Cars',
      description: 'Add, edit, and remove car listings.',
      path: '/admin/cars',
      color: 'bg-green-100 text-green-700',
    },
    {
      title: 'Manage Reports',
      description: 'View and manage reported content or users.',
      path: '/admin/reports',
      color: 'bg-yellow-100 text-yellow-700',
    },
    {
      title: 'Manage Services',
      description: 'Add, edit, and remove service listings.',
      path: '/admin/services',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      title: 'View Transactions',
      description: 'Monitor and manage all transactions.',
      path: '/admin/transactions',
      color: 'bg-pink-100 text-pink-700',
    },
    {
      title: 'View Buy Requests',
      description: 'Review and process buy requests.',
      path: '/admin/buy-requests',
      color: 'bg-indigo-100 text-indigo-700',
    },
    {
      title: 'View Service Appointments',
      description: 'Manage scheduled service appointments.',
      path: '/admin/service-appointments',
      color: 'bg-teal-100 text-teal-700',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
  
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Link to={role.path} key={index}>
              <div className={`rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${role.color}`}>
                <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
                <p className="text-sm">{role.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
  
    </div>
  );
}

export default AdminPage;