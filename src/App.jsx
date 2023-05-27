import { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import ClientDashboard from "./Pages/ClientDashboard/ClientDashboard";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="clientdashboard" element={<ClientDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
