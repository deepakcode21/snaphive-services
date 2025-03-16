import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllBookings from "./pages/Admin/AllBookings";
import AddPro from "./pages/Admin/AddPro";
import ProList from "./pages/Admin/ProList";
import { ProContext } from "./context/ProContext";
import ProBookings from "./pages/Professional/ProBookings";
import ProDashboard from "./pages/Professional/ProDashboard";
import ProProfile from "./pages/Professional/ProProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { pToken } = useContext(ProContext);

  return aToken || pToken ? (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-5 bg-gray-100">
          <Routes>
            {/* Admin Route */}
            <Route path="/" element={<></>} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-bookings" element={<AllBookings />} />
            <Route path="/add-professional" element={<AddPro />} />
            <Route path="/pro-list" element={<ProList />} />

            {/* Professional Route */}
            <Route path="/professional-dashboard" element={<ProDashboard />} />
            <Route path="/professional-bookings" element={<ProBookings />} />
            <Route path="/professional-profile" element={<ProProfile />} />
            
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
