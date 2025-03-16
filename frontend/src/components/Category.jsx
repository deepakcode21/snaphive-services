import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { categoryData } from "../assets/assets";
import { Link } from "react-router-dom";

const Category = () => {
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

  // Animation variants for each category item
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
      className="flex flex-col items-center gap-4 my-5 py-16 text-gray-600"
      id="speciality"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-3xl font-medium" variants={itemVariants}>
        Our Home Services
      </motion.h1>
      <motion.p
        className="sm:w-1/3 text-center text-sm"
        variants={itemVariants}
      >
        Simply browse through our extensive list of trusted professionals,
        Schedule your Bookings
      </motion.p>
      <motion.div
        className="flex justify-center gap-4 pt-5 w-full overflow-scroll"
        variants={containerVariants}
      >
        {categoryData.map((item) => (
          <Link
            key={item.id || item.speciality}
            to={`/professional/${item.speciality}`}
          >
            <motion.div
              className="flex flex-col items-center text-sm font-semibold cursor-pointer flex-shrink-0"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }} // Add hover animation
              whileTap={{ scale: 0.9 }} // Add tap animation
            >
              <img
                className="w-16 sm:w-24 md-2"
                src={item.image}
                alt={item.speciality}
              />
              <p>{item.speciality}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Category;
