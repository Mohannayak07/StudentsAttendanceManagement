import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { tablestyles } from '../Styles'
import html2pdf from 'html2pdf.js';
import { download_csv, export_table_to_csv } from './Html2CSV';
import {useNavigate} from 'react-router-dom'
import '../App.css';
function DisplayStudentsDetails({academicyear,setAcademicyear,branch}) {
    const { pathname } = useLocation()
    const [section, setSection] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [studentdata, setStudentdata] = useState()
    const contentRef = useRef(null);
    const navigate=useNavigate()
    const Changesection = () => {
        if (pathname === '/cse-a') {
            setSection("CSE-A")
        }
        else if (pathname === '/cse-b') {
            setSection("CSE-B")
        }
        else if (pathname === '/cse-c') {
            setSection("CSE-C")
        }
        else if (pathname === '/cse-d') {
            setSection("CSE-D")
        }
        else if (pathname === '/cse-e') {
            setSection("CSE-E")
        }
    }
    const [sectiondata, setSectiondata] = useState([])
    useEffect(() => {
        Changesection();
        var url=''
        if (pathname === '/cse-a') {
            setLoading(true);
            if(academicyear==='2019-2023'){
                url=process.env.REACT_APP_CSEA
            }
            axios.get(url).then(res => {
                // console.log(res.data.data)
                setLoading(false);
                setSectiondata(res.data.data);
                const val = JSON.parse(localStorage.getItem('cse-a'))
                if (!val) {
                    localStorage.setItem('cse-a', JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else {
                    setSectiondata(val);
                }


            })
                .catch(err => {
                    console.log(err)
                    setError(true)
                    setInterval(() => {
                        setError(false)
                    }, 2000)
                })
        }
        else if (pathname === '/cse-b') {
            setLoading(true);
            axios.get(process.env.REACT_APP_CSEB).then(res => {
                console.log(res.data.data)
                setLoading(false);
                setSectiondata(res.data.data);
                const val = JSON.parse(localStorage.getItem('cse-b'))
                if (!val) {
                    localStorage.setItem('cse-b', JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else {
                    setSectiondata(val);
                }
            })
                .catch(err => {
                    console.log(err)
                    setError(true)
                    setInterval(() => {
                        setError(false)
                    }, 2000)
                })
        }
        else if (pathname === '/cse-c') {
            setLoading(true);
            axios.get(process.env.REACT_APP_CSEC).then(res => {
                console.log(res.data.data)
                setLoading(false);
                setSectiondata(res.data.data);
                const val = JSON.parse(localStorage.getItem('cse-c'))
                if (!val) {
                    localStorage.setItem('cse-c', JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else {
                    setSectiondata(val);
                }

            })
                .catch(err => {
                    console.log(err)
                    setError(true)
                    setInterval(() => {
                        setError(false)
                    }, 2000)
                })
        }
        else if (pathname === '/cse-d') {
            setLoading(true);
            axios.get(process.env.REACT_APP_CSED).then(res => {
                console.log(res.data.data)
                setLoading(false);
                setSectiondata(res.data.data);
                const val = JSON.parse(localStorage.getItem('cse-d'))
                if (!val) {
                    localStorage.setItem('cse-d', JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else {
                    setSectiondata(val);
                }

            })
                .catch(err => {
                    console.log(err)
                    setError(true)
                    setInterval(() => {
                        setError(false)
                    }, 2000)
                })
        }
        else if (pathname === '/cse-e') {
            setLoading(true);
            axios.get(process.env.REACT_APP_CSEE).then(res => {
                console.log(res.data.data)
                setLoading(false);

                const val = JSON.parse(localStorage.getItem('cse-e'))
                if (!val) {
                    localStorage.setItem('cse-e', JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else {
                    setSectiondata(val);
                }
            })
                .catch(err => {
                    console.log(err)
                    setError(true)
                    setInterval(() => {
                        setError(false)
                    }, 2000)
                })
        }

    }, [pathname])

    const handlebutton = (rollno, hour) => {
        console.log(rollno, hour);
        sectiondata.forEach((data, index) => {
            if (data.RollNumber === rollno) {
                if (hour === 1) {
                    data.I = 'Present'
                }
                else if (hour === 2) {
                    data.II = 'Present'
                }
                else if (hour === 3) {
                    data.III = 'Present'
                }
                else if (hour === 4) {
                    data.IV = 'Present'
                }
                else if (hour === 5) {
                    data.V = 'Present'
                }
                else {
                    data.VI = 'Present'
                }
                // console.log(sectiondata)
            }

        })
        if (pathname === '/cse-a') {
            localStorage.setItem('cse-a', JSON.stringify(sectiondata));
            const value = JSON.parse(localStorage.getItem('cse-a'))
            // console.log(value);
            setSectiondata(value);
        }
        else if (pathname === '/cse-b') {
            localStorage.setItem('cse-b', JSON.stringify(sectiondata));
            const value = JSON.parse(localStorage.getItem('cse-b'))
            console.log(value);
            setSectiondata(value);
        }
        else if (pathname === '/cse-c') {
            localStorage.setItem('cse-c', JSON.stringify(sectiondata));
            const value = JSON.parse(localStorage.getItem('cse-c'))
            console.log(value);
            setSectiondata(value);
        }
        else if (pathname === '/cse-d') {
            localStorage.setItem('cse-d', JSON.stringify(sectiondata));
            const value = JSON.parse(localStorage.getItem('cse-d'))
            console.log(value);
            setSectiondata(value);
        }
        else if (pathname === '/cse-e') {
            localStorage.setItem('cse-e', JSON.stringify(sectiondata));
            const value = JSON.parse(localStorage.getItem('cse-e'))
            console.log(value);
            setSectiondata(value);
        }
    }

    const downloadPdf = () => {
        const content = contentRef.current;
        html2pdf()
            .set({ html2canvas: { scale: 4 } })
            .from(content)
            .save(`${section}.pdf`);
    };

    const getDate = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        return currentDate
    }
    const clearSelection=()=>{
        setLoading(true)
        localStorage.clear()
       window.location.reload();
        setInterval(()=>{
            navigate('/')
        },2000)
       
        
    }


    return (
        <div >


            <div ref={contentRef}>

                {section && <h2 style={{ marginTop: '12px', marginBottom: '20px',textAlign:'center' }}>{section} Students Details({getDate()})</h2>}
                {error && <div className="alert alert-danger" role="alert" style={{ marginTop: '10px', marginBottom: '10px', width: '50%', margin: '0 auto' }}>
                    Error while fetching Data...
                </div>}
                {loading && <>
                    <center><div className="spinner-border" role="status" style={{ marginTop: '18px'}}>

                    </div><br></br><span>Loading please wait...</span></center></>
                }
                {sectiondata && !loading && <div>

                    <table className="table table-bordered" style={tablestyles} id="myTable">
                        <thead>
                            <tr>

                                <th scope="col">RollNumber</th>
                                {/* <th scope="col">Name</th> */}
                                <th scope="col">I</th>
                                <th scope="col">II</th>
                                <th scope="col">III</th>
                                <th scope="col">IV</th>
                                <th scope="col">V</th>
                                <th scope="col">VI</th>
                                <th scope="col">Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            {sectiondata.map((data, index) => {
                                let total = 0;
                                if (data.I === 'Present') total += 1;
                                if (data.II === 'Present') total += 1;
                                if (data.III === 'Present') total += 1;
                                if (data.IV === 'Present') total += 1;
                                if (data.V === 'Present') total += 1;
                                if (data.VI === 'Present') total += 1;

                                return (index !== 0 && <tr key={index}>

                                    <td>{data.RollNumber}</td>
                                    {/* <td>{data.Name}</td> */}
                                    <td>{data.I === 'Present' ? <button className='btn btn-success' >Present</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 1)} />}</td>
                                    <td>{data.II === 'Present' ? <button className='btn btn-success' >Present</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 2)} />}</td>
                                    <td>{data.III === 'Present' ? <button className='btn btn-success'>Present</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 3)} />}</td>
                                    <td>{data.IV === 'Present' ? <button className='btn btn-success'>Present</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 4)} />}</td>
                                    <td>{data.V === 'Present' ? <button className='btn btn-success' >Present</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 5)} />}</td>
                                    <td>{data.VI === 'Present' ? <button className='btn btn-success'>Present</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 6)} />}</td>
                                    <td>{total}</td>

                                </tr>

                                )

                            })}

                        </tbody>
                    </table>
                </div>}

            </div>
            <div style={{marginBottom:'100px',marginLeft:'152px',backgroundColor:'rgba(213,211,211)'}}>
                {!loading && <button onClick={downloadPdf} className="btn btn-primary" style={{ marginRight: '10px', float: 'left', marginLeft: '34px', marginTop: '40px' }}>Download PDF</button>}
                {!loading && <button onClick={() => export_table_to_csv(document.querySelector("myTable"), section)} className="btn btn-primary" style={{ float: 'left', marginLeft: '10px', marginTop: '40px' }}>Export to csv</button>}
                {!loading && <button onClick={() => clearSelection()} className="btn btn-danger" style={{ float: 'left', marginLeft: '10px', marginTop: '40px' }}>Clear</button>}
            </div>
            
        </div>
    )
}

export default DisplayStudentsDetails




