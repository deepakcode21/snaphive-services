import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("Login"); // Initial state set to "Login"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen flex items-center justify-center  w-full overflow-hidden relative p-4">
      <motion.div
        className="relative flex w-full max-w-6xl h-[90vh] md:h-[70vh] shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side - Hidden on Mobile */}
        <motion.div
          className={`hidden md:block absolute inset-0 w-1/2 bg-black text-white flex flex-col justify-center items-center p-6 md:p-10 transition-all duration-700 ease-in-out ${
            state === "Login" ? "translate-x-full" : "translate-x-0"
          }`}
          style={{ zIndex: state === "Login" ? 1 : 2 }} // Higher z-index when visible
        >
          {/* Centered Content with Top Margin */}
          <div className="text-center mt-35">
            {" "}
            {/* Added mt-10 for top margin */}
            <h2 className="text-3xl font-bold">Welcome to SnapHive</h2>
            <p className="mt-5 text-gray-300 max-w-md mx-auto">
              Join SnapHive today and unlock a world of convenience. Sign up to
              book services, track appointments, and enjoy personalized
              recommendations. Your one-stop destination for hassle-free service
              bookings. Whether it's home cleaning, beauty services, repairs, or
              more, SnapHive connects you with trusted professionals to make
              your life easier. Experience convenience, reliability, and
              quality—all at your fingertips.
            </p>
            <button className="mt-6 border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition">
              Know More
            </button>
          </div>
        </motion.div>

        {/* Right Side - Always Visible */}
        <motion.div
          className={`absolute inset-0 w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-8 transition-all duration-700 ease-in-out ${
            state === "Login" ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: state === "Login" ? 2 : 1 }} // Higher z-index when visible
        >
          <div className="w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-semibold text-center">
              {state === "Login" ? "Login" : "Create Account"}
            </h2>
            <p className="text-center text-gray-500 mb-6 text-sm md:text-base">
              Please {state === "Login" ? "log in" : "sign up"} to book services
            </p>
            <form onSubmit={onSubmitHandler} className="space-y-4">
              {state !== "Login" && (
                <div>
                  <label className="block text-sm">Full Name</label>
                  <input
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-black text-sm md:text-base"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your Name"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm">Email</label>
                <input
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-black text-sm md:text-base"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm">Password</label>
                <input
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-black text-sm md:text-base"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
                {state === "Login" ? "Login" : "Create Account"}
              </button>
            </form>
            <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
              {state === "Login"
                ? "Create a new account? "
                : "Already have an account? "}
              <span
                onClick={() =>
                  setState(state === "Login" ? "Sign Up" : "Login")
                }
                className="text-black font-semibold cursor-pointer hover:underline"
              >
                {state === "Login" ? "Click here" : "Login here"}
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
