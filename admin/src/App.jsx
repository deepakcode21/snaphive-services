import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
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
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path='/' element ={<></>}/>
          <Route path='/admin-dashboard' element ={<Dashboard />}/>
          <Route path='/all-bookings' element ={<ALLBookings />}/>
          <Route path='/add-professional' element ={<AddPro />}/>
          <Route path='/pro-list' element ={<ProList />}/>
        </Routes>
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
