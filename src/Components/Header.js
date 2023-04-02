import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
function Header({academicyear,setAcademicyear,branch}) {
    const handleDropdown=(e)=>{
        // console.log(e.target.value);
        setAcademicyear(e.target.value)
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                   <Link to="/"> <img src='./images/cvr_logo1.jpg' alt='logo' width={90} height={90} style={{ borderRadius: '16%', padding: '8px' }}></img></Link>
                  <center>
                    <div className="navbar-brand"  style={{ fontWeight: '300', fontSize: '26px',marginLeft:'18px'}}>CVR COLLEGE OF ENGINEERING <br /><div style={{ fontSize: '14px',marginBottom:'8px',fontWeight:200, }}>
                   {/* <select name="academic year" id='academic-year' onChange={(e)=>handleDropdown(e)}>
                        <option value="">--Select Academic-year--</option>
                        <option value="2019-2023">2019-2023</option>
                        <option value="2020-2024">2020-2024</option>
                        <option value="2021-2025">2021-2025</option>
                        <option value="2022-2026">2022-2026</option>
                   </select> */}
                        
                        
                        (An Autonomous Institution,NAAC 'A Grade')
                        </div   ></div>
                        </center>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '8%' }}>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/cse-a'>CSE-A</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/cse-b'>CSE-B</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cse-c">CSE-C</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cse-d">CSE-D</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cse-e">CSE-E</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header