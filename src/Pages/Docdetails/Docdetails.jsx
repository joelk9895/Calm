import React, { useState } from "react";
import "./Docdetails.css";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Docdetails = () => {
  const [name, setName] = useState("");
  const [experience, setExp] = useState("");
  const [phone, setPhone] = useState("");
  const [spec, setSpec] = useState(""); 
  const [meet, setmeet] = useState('')

  const sub = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(database, "data"), {
        Name: name,
        experience: experience,
        phone: phone,
        specialization: spec,
        meet_link: meet
      });

      alert("Data Successfully Submitted");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="docdetails">
      <div className="detailstha">
        <h3>Please Enter your Details.</h3>
      </div>

      <div className="form">
        <form action="" method="post" onSubmit={(event) => sub(event)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name=""
            placeholder="your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            name="experience"
            placeholder="experience"
            onChange={(e) => setExp(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="">Specialization</label>
          <input
            type="text"
            name="Specialization"
            placeholder="specialization"
            onChange={(e) => setSpec(e.target.value)}
          />
          <label htmlFor="">meet link</label>
          <input
            type="text"
            name="meet"
            placeholder="meet link"
            onChange={(e) => setmeet(e.target.value)}
          />
          <label htmlFor="">Medical License</label>
          <input type="File" name="Medical License" />
          <label htmlFor="">Upload Picture</label>
          <input type="File" name="Profile picture" />

          <button type="submit">Submit</button>
        </form>
        <div className="next">
          <Link to="/doctormeeting"><button>next</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Docdetails;