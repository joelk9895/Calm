import React, { useEffect, useState } from "react";
import "./DoctorMeeting.css";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { app } from "../firebase/firebase";

const DoctorMeeting = () => {
  const [heartRate, setHeartRate] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    const db = getDatabase(app);
    const pulseRef = ref(db, "main");

    onValue(
      pulseRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setHeartRate(data.pulse);
          setTemperature(data.temp);
        }
      },
      {
        onlyOnce: false,
      }
    );

    return () => {
      off(pulseRef);
    };
  }, []);

  return (
    <>
      <div className="meetinpage">
        <div className="doctormeeting">
          <iframe
            src="https://us04web.zoom.us/j/6511778853?pwd=9pI7nn65LC2G03yF29BsAzMX4LAb6o.1/meetingsdk"
            allow="camera; microphone"
            width={1100}
            height={800}
            className="doctorframe"
          ></iframe>
        </div>
        <div className="rightdatabar">
          <div className="leftdatabar1">
            <h1>Joel</h1>
            {localStorage.getItem("responseml")}
            <a target="_blank" href="http://localhost:8501" className="calmpdf">
              Calm PDF
            </a>
          </div>
          <div className="heartrate sidecar">
            <h3>Heart Rate</h3>
            <p>❤️</p>
            <p>{heartRate} BPM</p>
          </div>
          <div className="Temperature sidecar">
            <h3>Temperature</h3>
            <p>🌡️</p>
            <p>{temperature}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorMeeting;
