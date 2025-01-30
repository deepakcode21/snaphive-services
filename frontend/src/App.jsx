import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Professional from './pages/Professional'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/professional' element={<Professional/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/appointment/:proId' element={<Appointment/>} />
        <Route path='/professional/:services' element={<Professional/>} />
      </Routes>

    </div>
  )
}

export default App