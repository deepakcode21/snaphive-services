import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"; // For animations

const TopProfessional = () => {
  const navigate = useNavigate();
  const { Professionals } = useContext(AppContext);

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
    <div className="flex flex-col items-center gap-6 my-5 text-gray-900 md:mx-10">
      {/* Heading */}
      <motion.h1
        className="text-3xl text-center sm:w-1/2 font-medium"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Top Professionals
      </motion.h1>

      {/* Description */}
      <motion.p
        className="sm:w-1/3 text-center text-sm text-gray-600"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Simply browse through our extensive list of trusted professionals.
      </motion.p>

      {/* Responsive Grid with Improved Styling */}
      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-3 sm:px-0 pt-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Professionals.slice(0, 10).map((item, index) => (
          <motion.div
            key={index}
            onClick={() => {
              navigate(`/booking/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border-[1px] border-black rounded-xl overflow-hidden cursor-pointer shadow-[11px_10px_0px_rgba(0,0,0,0.85)] hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Improved Image Handling */}
            <div className="w-full h-48 md:h-56 overflow-hidden flex items-center justify-center">
              <motion.img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                src={item.image}
                alt={item.name}
                style={{ objectPosition: "top center" }} // Ensure the face is centered
                whileHover={{ scale: 1.1 }}
              />
            </div>

            {/* Enhanced Card Content */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-sm">Available</p>
              </div>
              <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-black">★</span>
                <span className="text-sm text-gray-600">
                  {item.rating || "4.5"}
                </span>
                <span className="text-sm text-gray-400">
                  ({item.reviews || "100"} reviews)
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button Styling */}
      <motion.button
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => {
          navigate("/professional");
          scrollTo(0, 0);
        }}
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View More Professionals
      </motion.button>
    </div>
  );
};

export default TopProfessional;