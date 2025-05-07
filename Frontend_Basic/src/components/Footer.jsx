import React from 'react'
import { Facebook, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              AutoMarket is your trusted platform for buying and selling used cars with complete
              transparency and peace of mind.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/buy" className="hover:text-white transition">Buy</a></li>
              <li><a href="/sell" className="hover:text-white transition">Sell</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/support" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@automarket.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Auto Street, Car City</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AutoMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
