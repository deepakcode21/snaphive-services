import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const Contact = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="py-5 items-center justify-center">
      {/* Contact Us Heading */}
      <motion.div
        className="text-center mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-3xl font-bold text-gray-800">
          CONTACT <span className="text-black">US</span>
        </p>
        <p className="text-gray-500 mt-3 text-lg">
          We'd love to hear from you!
        </p>
      </motion.div>

      {/* Contact Content */}
      <motion.div
        className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-center justify-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Contact Image */}
        <motion.img
          className="w-full md:max-w-[400px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500"
          src={assets.contact_image}
          alt="Contact Us"
          variants={fadeInUp}
        />

        {/* Contact Details */}
        <motion.div
          className="flex flex-col justify-center items-start gap-6"
          variants={fadeInUp}
        >
          <p className="font-semibold text-2xl text-gray-800">Our Office</p>
          <p className="text-gray-600 text-lg">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-600 text-lg">
            Tel: (414) 452-0935 <br /> Email: deepak@gmail.com
          </p>

          {/* Careers Section */}
          <div className="mt-5 ">
            <p className="font-semibold text-2xl text-gray-800">
              Careers at SHAPHIVE
            </p>
            <p className="text-gray-600 text-lg mt-2">
              Learn more about our teams and job openings.
            </p>
            <motion.button
                className="bg-black text-white my-3 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
            >
              Explore Jobs
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;