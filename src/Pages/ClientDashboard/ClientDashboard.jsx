import React from "react";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  return (
    <div className="">
      <div className="clientdashboard">
        <div className="client">
          <div className="sidebar">
            <h1>Calm</h1>
            <a href="http://gogle" target="_blank" rel="noopener noreferrer">
              Home
            </a>
            <a href="http://gogle" target="_blank" rel="noopener noreferrer">
              Home
            </a>
            <a href="http://gogle" target="_blank" rel="noopener noreferrer">
              Home
            </a>
            <a href="http://gogle" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </div>
          <div className="ai">
            <form className="ai-form" action="" method="post">
              <label htmlFor="ai">Find your best Doctor</label>
              <textarea
                type="textarea"
                name="ai"
                id="ai"
                placeholder="Enter your symptoms"
              />
              <button type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
