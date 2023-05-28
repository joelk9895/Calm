import React from "react";
import "./Docdetails.css" 

const Docdetails = () => {
  return (
    <div className="docdetails">
        <div className="detailstha">
            <h3>Please Enter your Details.</h3>
        </div>

        <div className="form">
        <form action="" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" name=""/>
            <label htmlFor="experience">experience</label>
            <input type="text" experience=""/>
            <label htmlFor="phone">phone</label>
            <input type="text" phone=""/>
            <label htmlFor="">Specialization</label>
            <input type="text" name="Specialization"/>
            <label htmlFor="">Medical License</label>
            <input type="File" name="Medical License"/>
            <label htmlFor="">Upload Picture</label>
            <input type="File" name="Profile picture"/>

        </form>
        </div>


    </div>
  )
}

export default Docdetails