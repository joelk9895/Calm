import React, { useState } from "react";
import "./Patientdet.css";
import { Link } from "react-router-dom";

const Patientdet = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    phone: 0,
    sex: 0,
    BMI: 0,
    BP: 0,
    TC: 0,
    LDL: 0,
    HDL: 0,
    TCH: 0,
    LTG: 0,
    Glucose: 0,
    medicalReport: null,
  });
  const [res, setRes] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "medicalReport") {
      setFormData({ ...formData, medicalReport: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("age", formData.age);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("sex", formData.sex);
    formDataObj.append("TC", formData.TC);
    formDataObj.append("BMI", formData.BMI);
    formDataObj.append("BP", formData.BP);
    formDataObj.append("LDL", formData.LDL);
    formDataObj.append("HDL", formData.HDL);
    formDataObj.append("TCH", formData.TCH);
    formDataObj.append("LTG", formData.LTG);
    formDataObj.append("Glucose", formData.Glucose);
    formDataObj.append("medicalReport", formData.medicalReport);

    // Make the POST request
    fetch("http://localhost:8080/list2", {
      method: "POST",
      body: formDataObj,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        setRes(data)
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="patientdet">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="sex">Sex</label>
          <select name="sex" value={formData.sex} onChange={handleChange}>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
          <label htmlFor="BMI">BMI</label>
          <input
            type="text"
            name="BMI"
            value={formData.BMI}
            onChange={handleChange}
          />
          <label htmlFor="TC">TC</label>
          <input
            type="text"
            name="TC"
            value={formData.TC}
            onChange={handleChange}
          />
          <label htmlFor="BP">BP</label>
          <input
            type="text"
            name="BP"
            value={formData.BP}
            onChange={handleChange}
          />
          <label htmlFor="LDL">LDL</label>
          <input
            type="text"
            name="LDL"
            value={formData.LDL}
            onChange={handleChange}
          />
          <label htmlFor="HDL">HDL</label>
          <input
            type="text"
            name="HDL"
            value={formData.HDL}
            onChange={handleChange}
          />
          <label htmlFor="TCH">TCH</label>
          <input
            type="text"
            name="TCH"
            value={formData.TCH}
            onChange={handleChange}
          />
          <label htmlFor="LTG">LTG</label>
          <input
            type="text"
            name="LTG"
            value={formData.LTG}
            onChange={handleChange}
          />
          <label htmlFor="Glucose">Glucose</label>
          <input
            type="text"
            name="Glucose"
            value={formData.Glucose}
            onChange={handleChange}
          />
          <label htmlFor="medicalReport">Medical Report</label>
          <input type="file" name="medicalReport" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
        <div className="next">
          <Link to="/clientdashboard"><button>next</button></Link>
        </div>
        {res}
        
      </div>
    </div>
  );
};

export default Patientdet;
