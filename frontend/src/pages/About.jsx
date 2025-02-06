import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // For animations

const About = () => {
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
    <div className="py-5">
      {/* About Us Section */}
      <motion.div
        className="text-center mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-3xl font-bold text-gray-800">
          ABOUT <span className="text-black">US</span>
        </p>
        <p className="text-gray-500 mt-3 text-lg">
          Discover what makes us unique
        </p>
      </motion.div>

      {/* Image and Description Section */}
      <motion.div
        className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          className="w-full md:w-1/2 md:max-w-[400px] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500"
          src={assets.about_image}
          alt="About Us"
          variants={fadeInUp}
        />
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          variants={fadeInUp}
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to SnapHive, your go-to platform for premium home and
            lifestyle services. From beauty and home repairs to cleaning and
            fitness, we connect you with trusted professionals for a seamless
            experience.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We simplify service bookings with a tech-driven, reliable, and
            transparent approach. Our user-friendly platform ensures quick
            access to verified experts, making your everyday needs hassle-free.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              We aim to revolutionize service hiring by making it effortless and
              efficient. Through technology and innovation, we empower
              professionals while ensuring top-quality experiences for our users.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="text-center my-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-3xl font-bold text-gray-800">
          WHY <span className="text-black">CHOOSE US</span>
        </p>
        <p className="text-gray-500 mt-3 text-lg">Here's what sets us apart</p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: "Trusted Experts",
            description:
              "We ensure only skilled, background-checked experts join our platform, ensure quality and reliability in every service.",
          },
          {
            title: "Instant Booking",
            description:
              "Our user-friendly platform lets you find and book services in just a few taps, saving you time and effort.",
          },
          {
            title: "Secure Payments",
            description:
              "No hidden costs! We offer clear pricing and secure payment options for a hassle-free experience.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600 text-lg">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;