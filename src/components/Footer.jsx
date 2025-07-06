
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">Local Service Market</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting you with trusted local service providers for all your needs.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Electricians</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Plumbers</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Tutors</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">RO Filter Repair</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">And More...</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Find Services</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Become a Provider</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: support@localservicemarket.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Available 24/7 for your service needs</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Local Service Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
