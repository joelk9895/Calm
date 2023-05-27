import React from "react";
import "./DoctorMeeting.css"

const DoctorMeeting = () => {
  return (
    <>
    <div className="meetinpage">
      <div className="doctormeeting">
        
        <iframe
          src="https://us04web.zoom.us/j/73217414937?pwd=2qa8a1uQuuQXZphZPSzZYaa75QefnB.1/meetingsdk"
          allow="camera; microphone"
          width={1100}
          height={800}
          className="doctorframe"
        ></iframe>
      </div>
      <div className="rightdatabar">
        <div className="leftdatabar1">
            <h1>Patient Name</h1>
      </div>
      <div className="heartrate sidecar">
            <h3>Heart Rate</h3>
                <p>❤️</p>
            <p>112BPM</p>
      </div>
      <div className="Temperature sidecar">
            <h3>Temperature</h3>
            <p>🌡️</p>
            <p>35.4</p>
      </div>
      </div>
      </div>
    </>
  );
};

export default DoctorMeeting;
