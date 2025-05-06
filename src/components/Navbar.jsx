import React, { useState } from 'react'
import { Menu, X, Car } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">AutoMarket</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/buy" className="text-gray-600 hover:text-blue-600 transition">Buy</Link>
            <Link to="/sell" className="text-gray-600 hover:text-blue-600 transition">Sell</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition">Services</Link>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/buy" className="text-gray-600 hover:text-blue-600 transition">Buy</Link>
              <Link to="/sell" className="text-gray-600 hover:text-blue-600 transition">Sell</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition">Services</Link>
              <Link to="/login" className="text-gray-600 hover:text-blue-600 transition">Login</Link>
              <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-center">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
