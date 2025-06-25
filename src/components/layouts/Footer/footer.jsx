import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Brand & Mission */}
        <div className="mb-6 md:mb-0 max-w-md">
          <h2 className="text-xl font-bold text-white">CleanCity</h2>
          <p className="mt-2 text-sm text-gray-400">
            Empowering citizens to report garbage, promote recycling, and keep
            our communities clean and green.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-md font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/report" className="hover:text-white">
                Report Garbage
              </a>
            </li>
            <li>
              <a href="/guidelines" className="hover:text-white">
                Guidelines
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-md font-semibold text-white">Contact</h3>
          <p className="flex items-center gap-1 mt-2 text-sm">
            <CiLocationOn className="text-lg" />
            123 Clean St, Green City, India
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} CleanCity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
