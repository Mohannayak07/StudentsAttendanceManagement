import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
function Home({setAcademicyear,academicyear,branch,setBranch}) {
  const navigate=useNavigate()
  const [submit,setSubmit]=useState(false)
  const handleDropdown = (e) => {
    console.log(e.target.value);
    setAcademicyear(e.target.value)
  }
  const handlebranchDropdown = (e) => {
    console.log(e.target.value)  
    setBranch(e.target.value)
    setSubmit(true);
  }
  const handleSubmit=()=>{
      navigate('/cse-a')
  }
  return (
    <div>
      <marquee width="90%" direction="left" height="100px">
        Welcome to CVR College studence attendance management portal
        
      </marquee>
      <center>
        
      <div className='main-container'>
            <div>
              <label htmlFor="academic-year" aria-required>Please select academic year<span style={{ color: 'red' }}>*</span> : &nbsp;</label>
              <select name="academic year" id='academic-year' onChange={(e) => handleDropdown(e)}>
                <option value="">--Select Academic-year--</option>
                <option value="2019-2023">2019-2023</option>
                <option value="2020-2024" disabled>2020-2024</option>
                <option value="2021-2025" disabled>2021-2025</option>
                <option value="2022-2026" disabled>2022-2026</option>
              </select>
            </div>
         <br></br>


            <label htmlFor='branch' aria-required>Please select Branch<span style={{ color: 'red' }}>*</span> : &nbsp;</label>
            <select name="branch" id='branch' onChange={(e) => handlebranchDropdown(e)}>
              <option value="">--Select branch--</option>
              <option value="CSE">CSE</option>
                <option value="ECE" disabled>ECE</option>
                <option value="EEE" disabled>EEE</option>
            </select><br></br>

            {submit && <button className='btn btn-primary' style={{marginTop:'30px'}} onClick={()=>handleSubmit()}>Submit</button>}
            </div>
      </center>
      
    </div>
  )
}

export default Home