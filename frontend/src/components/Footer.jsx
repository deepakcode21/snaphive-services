import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  // Animation variants for each section
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="bg-gray-50 py-10 my-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {/*------------------ Left Section ------------------*/}
          <motion.div className="space-y-6" variants={itemVariants}>
            <img className="w-40" src={assets.logo} alt="SnapHive Logo" />
            <p className="text-gray-600 leading-relaxed">
              Our platform is designed to make your life easier by connecting
              you with trusted, skilled professionals in just a few clicks.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }} // Hover animation
                whileTap={{ scale: 0.9 }} // Tap animation
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/*------------------ Center Section (Company Links) ------------------*/}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href={"/"}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }} // Hover animation
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href={"/about"}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href={"/contact"}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/*------------------ Right Section (Contact Info) ------------------*/}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600">+91-XXXX-XXXX-XX</li>
              <li className="text-gray-600">deepak@gmail.com</li>
            </ul>
          </motion.div>

          {/*------------------ Newsletter Section ------------------*/}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <form className="flex flex-col space-y-4">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                whileFocus={{ scale: 1.02 }} // Focus animation
              />
              <motion.button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }} // Hover animation
                whileTap={{ scale: 0.95 }} // Tap animation
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/*------------------ Divider and Copyright ------------------*/}
        <motion.div
          className="mt-10 border-t border-gray-200 pt-6"
          variants={itemVariants}
        >
          <p className="text-center text-gray-600">
            © Copyright 2025 SnapHive. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
