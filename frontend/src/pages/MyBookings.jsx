import React, { useContext } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { AppContext } from "../context/AppContext";

const MyBookings = () => {
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-4xl mx-auto p-6"
    >
      {/* Heading */}
      <motion.p
        variants={fadeInUp}
        className="pb-3 text-2xl font-semibold text-zinc-800 border-b border-zinc-200"
      >
        My Bookings
      </motion.p>

      {/* Bookings List */}
      <motion.div
        variants={staggerContainer}
        className="mt-6 space-y-6"
      >
        {Professionals.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-[11px_10px_0px_rgba(0,0,0,0.85)] border-[1px] border-black p-6 md:p-8 lg:p-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]  rounded-br-3xl" />

            {/* Professional Image */}
            <div className="flex items-center justify-center">
              <motion.img
                className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm"
                src={item.image}
                alt={item.name}
                whileHover={{ scale: 1.1 }}
              />
            </div>

            {/* Professional Details */}
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-lg font-semibold text-zinc-800">{item.name}</p>
              <p className="text-sm text-zinc-500">{item.speciality}</p>
              <p className="mt-3 text-sm font-medium text-zinc-700">Address:</p>
              <p className="text-xs text-zinc-500">{item.address.line1}</p>
              <p className="text-xs text-zinc-500">{item.address.line2}</p>
              <p className="mt-3 text-sm font-medium text-zinc-700">
                Date & Time:{" "}
                <span className="font-normal">25, July, 2024 | 10:30 AM</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 justify-center">
              <motion.button
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pay Online
              </motion.button>
              <motion.button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MyBookings;