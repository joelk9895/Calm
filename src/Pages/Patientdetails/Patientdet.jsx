import React from 'react'
import "./Patientdet.css"
 

const Patientdet = () => {
  return (
    <div className='patientdet'>
        <div className="form">
        <form action="" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" name=""/>
            <label htmlFor="Age">Age</label>
            <input type="text" Age=""/>
            <label htmlFor="phone">phone</label>
            <input type="text" phone=""/>
            <label htmlFor="">Sex</label>
            <select type="text" name="Sex">
                <option value="0.050608">Male</option>
                <option value="-0.044642">Female</option>

            </select>
            <label htmlFor="BMI">BMI</label>
            <input type="text" name="BMI"/>
            <label htmlFor="BP">BP</label>
            <input type="text" name="BP"/>
            <label htmlFor="LDL">LDL</label>
            <input type="text" name="LDL"/>
            <label htmlFor="HDL">HDL</label>
            <input type="text" name="HDL"/>
            <label htmlFor="TCH">TCH</label>
            <input type="text" name="TCH"/>
            <label htmlFor="LTG">LTG</label>
            <input type="text" name="LTG"/>
            <label htmlFor="Glucose">Glucose</label>
            <input type="text" name="Glucose"/>
            <label htmlFor="">Medical Report</label>
            <input type="file" name="Medical Report"/>

        </form>
        </div>
    </div>
  )
}

export default Patientdet