import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-0">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              <li><a href="#consulting" className="hover:text-blue-500">Consulting</a></li>
              <li><a href="/development" className="hover:text-blue-500">Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/bulgass.it" className="flex items-center space-x-2 hover:text-blue-500">
                  <FaInstagram size={20} />
                  <span>bulgass.it</span>
                </a>
              </li>
              <li>
                <a href="tel:+996508522911" className="flex items-center space-x-2 hover:text-blue-500">
                  <FaWhatsapp size={20} />
                  <span>+996 508 522 911</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/your_username" className="flex items-center space-x-2 hover:text-blue-500">
                  <FaTelegramPlane size={20} />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p>&copy; 2025 Bulgass. All rights reserved.</p>
          <div className="mt-4">
            <a href="#privacy-policy" className="text-gray-400 hover:text-blue-500 mr-6">Privacy Policy</a>
            <a href="#terms-of-service" className="text-gray-400 hover:text-blue-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
