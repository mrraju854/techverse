import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">
              ⚡ <span className="text-blue-500">TechVerse</span>
            </h1>
            <p className="text-gray-400 leading-7">
              Discover the latest laptops, smartphones, headphones, smart
              watches and more.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li className="hover:text-blue-500 cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-blue-500 cursor-pointer transition">
                Products
              </li>
              <li className="hover:text-blue-500 cursor-pointer transition">
                About
              </li>
              <li className="hover:text-blue-500 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-5">
              Categories
            </h2>
            <ul className="space-y-3">
              <li>Laptops</li>
              <li>Smartphones</li>
              <li>Headphones</li>
              <li>Smart Watches</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-5">Contact</h2>
            <p className="mb-3">📧 support@techverse.com</p>
            <p className="mb-6">📞 +91 6393360567</p>
            <div className="flex gap-5 text-2xl">
              <a href="#" className="hover:text-blue-500 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          © 2026 TechVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
