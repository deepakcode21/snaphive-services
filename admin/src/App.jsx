import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import ALLBookings from "./pages/Admin/ALLBookings";
import AddPro from "./pages/Admin/AddPro";
import ProList from "./pages/Admin/ProList";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-5 bg-gray-100">
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-bookings" element={<ALLBookings />} />
            <Route path="/add-professional" element={<AddPro />} />
            <Route path="/pro-list" element={<ProList />} />
          </Routes>
        </main>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;