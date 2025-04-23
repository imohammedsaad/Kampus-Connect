import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 mt-16">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <span className="text-white font-poppins font-bold text-xl">Campus Connect</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting students to campus events, clubs, and opportunities in an engaging, modern platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-primary-400 transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/clubs" className="text-gray-400 hover:text-primary-400 transition-colors">Clubs</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-poppins font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Sir M Visvesvaraya Institute of Technology and Management, Bangalore</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@campusconnect.edu" className="text-gray-400 hover:text-primary-400 transition-colors">
                  info@campusconnect.edu
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Campus Connect Portal. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;