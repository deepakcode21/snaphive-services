import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Professional from "./pages/Professional";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyBookings from "./pages/MyBookings";
import Booking from "./pages/Booking";
import MyProfile from "./pages/MyProfile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-4 sm:mx-[10%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/booking/:proId" element={<Booking />} />
          <Route path="/professional/:speciality" element={<Professional />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
