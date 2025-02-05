import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <div className="bg-gray-50 py-10 my-10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/*------------------ Left Section ------------------*/}
          <div className="space-y-6">
            <img className="w-40" src={assets.logo} alt="SnapHive Logo" />
            <p className="text-gray-600 leading-relaxed">
              Our platform is designed to make
              your life easier by connecting you with trusted, skilled
              professionals in just a few clicks.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/*------------------ Center Section (Company Links) ------------------*/}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/*------------------ Right Section (Contact Info) ------------------*/}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">GET IN TOUCH</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">+91-XXXX-XXXX-XX</li>
              <li className="text-gray-600">deepak@gmail.com</li>
            </ul>
          </div>

          {/*------------------ Newsletter Section ------------------*/}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/*------------------ Divider and Copyright ------------------*/}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-gray-600">
            © 2025 SnapHive. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;