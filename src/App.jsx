import { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import ClientDashboard from "./Pages/ClientDashboard/ClientDashboard";
import ClientMeeting from "./Pages/Clientmeeting/Clientmeeting";
import DoctorMeeting from "./Pages/DoctorMeeting/DoctorMeeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="clientdashboard" element={<ClientDashboard />} />
          <Route path="clientmeeting" element={<ClientMeeting />} />
          <Route path="doctormeeting" element={<DoctorMeeting />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
