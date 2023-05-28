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
        <div className="wrap">
            <div className="1">
            <label htmlFor="name">Name</label>
            <input type="text" name=""/>
            </div>
            <div className="2">
            <label htmlFor="experience">experience</label>
            <input type="text" experience=""/>
            </div>
            <div className="3">
            <label htmlFor="phone">phone</label>
            <input type="text" phone=""/>
            </div>
            <div className="4">
            <label htmlFor="">Specialization</label>
            <input type="text" name="Specialization"/>
            </div>
            <div className="5">
            <label htmlFor="">Medical License</label>
            <input type="File" name="Medical License"/>
            </div>
            <div className="6">
            <label htmlFor="">Upload Picture</label>
            <input type="File" name="Profile picture"/>
            </div>
        </div>        

        </form>
        </div>


    </div>
  )
}

export default Docdetails