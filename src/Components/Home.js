import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
function Home({setAcademicyear,academicyear,branch,setBranch}) {
  const navigate=useNavigate()
  const [submit,setSubmit]=useState(false)
  const [sections,setSections]=useState([])
  const [selectedsec,setSelectedsec]=useState()
  const handleDropdown = (e) => {
    console.log(e.target.value);
    setAcademicyear(e.target.value)
  }
  const handlebranchDropdown = (e) => {
    console.log(e.target.value) 
    handleSection(e.target.value) 
    setBranch(e.target.value)
    
  }
  const handleSubmit=()=>{
      navigate(`/${academicyear}/${selectedsec}`)
  }
  const handleSection=(branch)=>{
    if(branch==='ECE'){
      setSections(['ECE-A', 'ECE-B', 'ECE-C'])
    }
    else if(branch==='CSE'){
      setSections(['CSE-A', 'CSE-B', 'CSE-C','CSE-D','CSE-E'])
    }
    else if(branch==='EEE'){
      setSections(['EEE-A', 'EEE-B', 'EEE-C'])
    }
    else if(branch==='MECH'){
      setSections(['MECH-A', 'MECH-B'])
    }
    
  }
  const handlesectionDropdown=(e)=>{
    setSelectedsec(e.target.value)
    console.log(e.target.value)
    setSubmit(true);
  }
  console.log(sections)
  return (
    <div style={{paddingBottom:'100px'}}>
      <marquee width="90%" direction="left" height="100px">
        Welcome to CVR College studence attendance management portal
        
      </marquee>
      <center>
        
      <div className='main-container' style={{cursor:'pointer'}}>
            <div>
              <label htmlFor="academic-year" aria-required style={{alignItems:'flex-start',display:'flex'}}>Please select academic year<span style={{ color: 'red' }}>*</span> : &nbsp;</label>
              <select name="academic year" id='academic-year' onChange={(e) => handleDropdown(e)} style={{cursor:'pointer'}} className='form-select'>
                <option value="">--Select Academic-year--</option>
                <option value="2019-2023">2019-2023</option>
                <option value="2020-2024">2020-2024</option>
                <option value="2021-2025" >2021-2025</option>
                <option value="2022-2026" disabled>2022-2026</option>
              </select>
            </div>
         <br></br>

    <div >
          <div>

            <label style={{alignItems:'flex-start',display:'flex'}}>Please select Branch<span style={{ color: 'red' }}>*</span> : &nbsp;</label>
          </div>
          <div>

            <select name="branch" id='branch' onChange={(e) => handlebranchDropdown(e)} style={{cursor:'pointer'}} className='form-select'>
              <option value="">--Select branch--</option>
              <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
            </select><br></br>
          </div>
    </div>
        {sections && <><label htmlFor='branch' aria-required style={{alignItems:'flex-start',display:'flex'}}>Please select section<span style={{ color: 'red' }}>*</span> : &nbsp;</label>
        <select name="section" id='section' onChange={(e) => handlesectionDropdown(e)} style={{cursor:'pointer'}} className='form-select'>
          <option value="">--Select Section--</option>
          {sections.map((sec,i)=>{
            return <option value={sec} key={i}>{sec}</option>
          })}
        </select><br></br></>}

            {submit && <button className='btn btn-dark btn-lg btn-block' style={{marginTop:'30px'}} onClick={()=>handleSubmit()}>Submit</button>}
            </div>
      </center>
      
    </div>
  )
}

export default Home