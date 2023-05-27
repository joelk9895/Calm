import React from "react";
import "./Landing.css";


const Landing = () => {
  return (
    <div className="calm">
      <div className="heading">
        <h1>calm.</h1>
      </div>

      <div className="subs">
        <h3>Empowering Telemedicine,<br /> Real-time Health Data for Enhanced Diagnosis.</h3>
      </div>
      <div className="senti">
        <p>
          Where patient care meets cutting edge tecnology.
        </p>
      </div>
      <div className="signin">
        <button className="login-btn">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s" alt="" />
          <h3>Sign in as client.</h3>
          
        </button>
      </div>

    </div>
  );
};

export default Landing;
