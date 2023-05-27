import React, { useEffect, useState } from "react";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  const [responseData, setResponseData] = useState(null);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8080/list", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
        "Allow-Access-Control-Origin": "*",
        "no-cors": true,
      },
    });
    const data = await response.json();
    setResponseData(data);
    console.log(data);
  };

  return (
    <div className="">
      <div className="clientdashboard">
        <div className="client">
          <div className="head">
          <h1>⚕️calm</h1>
          </div>
          <div className="label"><p>Find your best Doctor.</p>
          </div>
          <div className="ai">
            <div className="ai-response">{responseData}</div>
            <form className="ai-form" onSubmit={handleSubmit}>
              <textarea 
                type="textarea"
                name="prompt"
                id="ai"
                placeholder="Enter your symptoms"
                value={formData.prompt}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
