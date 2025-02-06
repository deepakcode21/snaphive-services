import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"; // For animations

const Professional = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { Professionals } = useContext(AppContext);
  const [filterPro, setFilterPro] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterPro(Professionals.filter((pro) => pro.speciality === speciality));
    } else {
      setFilterPro(Professionals);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [Professionals, speciality]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };



  return (
    <div className="text-gray-800 p-4">
      <motion.p
        className="text-lg font-semibold mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      >
        Browse through the professionals by specialty.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/*------------ Right Side (Filter Section) ----------*/}
        <motion.div
          className="w-full sm:w-64 rounded-lg p-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-lg font-semibold mb-4">Filter by Specialty</h3>
          <div className="flex flex-col gap-3">
            {[
              "Chef",
              "Barber",
              "Painter",
              "Plumber",
              "Mechanic",
              "Carpenter",
              "Technician",
            ].map((specialtyItem, index) => (
              <motion.div
                key={specialtyItem}
                onClick={() =>
                  speciality === specialtyItem
                    ? navigate("/professional")
                    : navigate(`/professional/${specialtyItem}`)
                }
                className={`w-full px-4 py-2 rounded-md transition-all cursor-pointer ${
                  speciality === specialtyItem
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-200 text-gray-700"
                }`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {specialtyItem}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*------ Left Side (Professional Cards) ------*/}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-3 sm:px-0 pt-6">
          {filterPro.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => {
                navigate(`/booking/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border-[1px] border-black rounded-xl overflow-hidden cursor-pointer shadow-[11px_10px_0px_rgba(0,0,0,0.85)] hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
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
                <p className="text-gray-900 text-lg font-semibold">
                  {item.name}
                </p>
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
        </div>
      </div>
    </div>
  );
};

export default Professional;