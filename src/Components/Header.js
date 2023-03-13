import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src='./images/cvr_logo1.jpg' alt='logo' width={90} height={90} style={{ borderRadius: '16%', padding: '8px' }}></img>
                    <Link className="navbar-brand" to="/" style={{ fontWeight: '500', fontSize: '26px' }}>CVR COLLEGE OF ENGINEERING <br /><span style={{ fontSize: '14px',marginBottom:'8px' }}>(Academic Year 2022-2023)</span></Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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