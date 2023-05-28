import { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import ClientDashboard from "./Pages/ClientDashboard/ClientDashboard";
import ClientMeeting from "./Pages/Clientmeeting/Clientmeeting";
import DoctorMeeting from "./Pages/DoctorMeeting/DoctorMeeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Docdash from "./Pages/DoctorsDashboard/Docdash";
import Listdocs from "./Pages/Listofdocs/listdocs";
import Docdetails from "./Pages/Docdetails/Docdetails";
import docVerify from "./Pages/DocVerify/docVerify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="clientdashboard" element={<ClientDashboard />} />
          <Route path="clientmeeting" element={<ClientMeeting />} />
          <Route path="doctormeeting" element={<DoctorMeeting />} />
          <Route path="doctordashboard" element={<Docdash/>} />
          <Route path="listofdocs" element={<Listdocs/>} />
          <Route path="docsdetails" element={<Docdetails/>} />
          <Route path="docverify" element={<docVerify/>}/>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
