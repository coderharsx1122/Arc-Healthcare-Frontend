import React from 'react';
import Navbar from './features/Navbar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import DoctorLogin from './features/Doctor/Components/DoctorLogin';
import DoctorRegister from './features/Doctor/Components/DoctorRegister';
import Home from './features/Home/Home';
import { DoctorDashBoard } from './features/Doctor/Components/DoctorDashboard';
import PatientLogin from './features/Patient/Components/PatientLogin';
import { PatientDashBoard } from './features/Patient/Components/PatientDashboard';
import DoctorProfileForPatient from './features/Patient/Components/DoctorProfileForPatient';
import AppointmentDoctor from './features/Doctor/Components/AppointmentDoctor';
import PatientRegister from './features/Patient/Components/PatientRegister';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<div />} />
          </Route>
          {/* doctor routes */}
          <Route path='/doctor/login' element={<DoctorLogin />} />
          <Route path='/doctor/register' element={<DoctorRegister />} />
          <Route path='/doctor/dashboard' element={<DoctorDashBoard />} />
          <Route path='/doctor/:id' element={<DoctorProfileForPatient />} />
          <Route path='/doctor/appointment/:id' element={<AppointmentDoctor />} />
          <Route path='/doctor/appointment-request/:id' element={<AppointmentDoctor />} /> 
          {/* patient routes */}
          <Route path='/patient/appointment/:id' element={<div>Appointment Page for PATIENT</div>} />
          <Route path='/patient/login' element={<PatientLogin />} />
          <Route path='/patient/register' element={<PatientRegister />} />
          <Route path='/patient/dashboard' element={<div>Patient Dashboard</div>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
