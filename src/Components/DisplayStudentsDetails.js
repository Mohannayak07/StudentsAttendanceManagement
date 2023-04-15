import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { tablestyles } from '../Styles'
import { useParams } from 'react-router-dom'
import html2pdf from 'html2pdf.js';
import { download_csv, export_table_to_csv } from './Html2CSV';
import {useNavigate} from 'react-router-dom'
import '../App.css';
function DisplayStudentsDetails({branch}) {
    const { pathname } = useLocation()
    
    const academicyear=useParams().academicyear
    const section=useParams().sec
    // console.log(params)
    // console.log(pathname)
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [studentdata, setStudentdata] = useState()
    const contentRef = useRef(null);
    const navigate=useNavigate()
    // const Changesection = () => {
    //     if (pathname === '/cse-a') {
    //         setSection("CSE-A")
    //     }
    //     else if (pathname === '/cse-b') {
    //         setSection("CSE-B")
    //     }
    //     else if (pathname === '/cse-c') {
    //         setSection("CSE-C")
    //     }
    //     else if (pathname === '/cse-d') {
    //         setSection("CSE-D")
    //     }
    //     else if (pathname === '/cse-e') {
    //         setSection("CSE-E")
    //     }
    // }
    const [sectiondata, setSectiondata] = useState([])
const getStudentsData=(sec,url,academicyear)=>{
    axios.get(url).then(res => {
        // console.log(res.data.data)
        setLoading(false);
        // setSectiondata(res.data.data);
       
        
        
            if(academicyear==='2019-2023'){
                const val = JSON.parse(localStorage.getItem(`19${section}`))
                if(!val){

                    localStorage.setItem(`19${sec}`, JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else{
                    setSectiondata(val)
                }
            }
            else if(academicyear==='2020-2024'){
                const val = JSON.parse(localStorage.getItem(`20${section}`))
                if(!val){

                    localStorage.setItem(`20${sec}`, JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else{
                    setSectiondata(val)
                }
            }
            else if(academicyear==='2021-2025'){
                const val = JSON.parse(localStorage.getItem(`21${section}`))
                if(!val){

                    localStorage.setItem(`21${sec}`, JSON.stringify(res.data.data));
                    setSectiondata(res.data.data);
                }
                else{
                    setSectiondata(val)
                }
            }
        
      


    })
        .catch(err => {
            console.log(err)
            setLoading(false);
            setError(true)
            setInterval(() => {
                setError(false)
            }, 2000)
        })
}

    useEffect(() => {
       
        var url=''
        if (academicyear === '2019-2023') {
            setLoading(true);
            if(branch==='CSE'){

                if(section==='CSE-A'){
                    url=process.env.REACT_APP_CSEA
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-B'){
                    url=process.env.REACT_APP_CSEB
                    getStudentsData(section,url,academicyear)
    
                }
                else if(section==='CSE-C'){
                    url=process.env.REACT_APP_CSEC
                    getStudentsData(section,url,academicyear)
    
                }
                else if(section==='CSE-D'){
                    url=process.env.REACT_APP_CSED
                    getStudentsData(section,url,academicyear)
    
                }
                else if(section==='CSE-E'){
                    url=process.env.REACT_APP_CSEE
                    getStudentsData(section,url,academicyear)
    
                }
            }
            else if(branch==='ECE'){

                 if(section==='ECE-A'){
                    url=process.env.REACT_APP_ECEA
                    getStudentsData(section,url,academicyear)
    
                }
                else if(section==='ECE-B'){
                    url=process.env.REACT_APP_ECEB
                    getStudentsData(section,url,academicyear)
    
                }
                else if(section==='ECE-C'){
                    url=process.env.REACT_APP_ECEC
                    getStudentsData(section,url,academicyear)
    
                }
            }
            else if(branch==='MECH'){

                if(section==='MECH-A'){
                    url=process.env.REACT_APP_MECHA
                    getStudentsData(section,url,academicyear)
    
                }
                else if(section==='MECH-B'){
                    url=process.env.REACT_APP_MECHB
                    getStudentsData(section,url,academicyear)
    
                }
            }
            
        }
        else if(academicyear==='2020-2024'){
            setLoading(true);
            if(branch==='CSE'){

                if(section==='CSE-A'){
                    url=process.env.REACT_APP_20CSEA
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-B'){
                    url=process.env.REACT_APP_20CSEB
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-C'){
                    url=process.env.REACT_APP_20CSEC
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-D'){
                    url=process.env.REACT_APP_20CSED
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-E'){
                    url=process.env.REACT_APP_20CSEE
                    getStudentsData(section,url,academicyear)
                }
            }
            
            else if(branch==='ECE'){

                if(section==='ECE-A'){
                   url=process.env.REACT_APP_20ECEA
                   getStudentsData(section,url,academicyear)
   
               }
               else if(section==='ECE-B'){
                   url=process.env.REACT_APP_20ECEB
                   getStudentsData(section,url,academicyear)
   
               }
               else if(section==='ECE-C'){
                   url=process.env.REACT_APP_20ECEC
                   getStudentsData(section,url,academicyear)
   
               }
           }
           else if(branch==='MECH'){

            if(section==='MECH-A'){
                url=process.env.REACT_APP_20MECHA
                getStudentsData(section,url,academicyear)

            }
            else if(section==='MECH-B'){
                url=process.env.REACT_APP_20MECHB
                getStudentsData(section,url,academicyear)

            }
        }
            
        }

        else if(academicyear==='2021-2025'){
            setLoading(true);
            if(branch==='CSE'){

                if(section==='CSE-A'){
                    url=process.env.REACT_APP_21CSEA
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-B'){
                    url=process.env.REACT_APP_21CSEB
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-C'){
                    url=process.env.REACT_APP_21CSEC
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-D'){
                    url=process.env.REACT_APP_21CSED
                    getStudentsData(section,url,academicyear)
                }
                else if(section==='CSE-E'){
                    url=process.env.REACT_APP_21CSEE
                    getStudentsData(section,url,academicyear)
                }
            }
            
            else if(branch==='ECE'){

                if(section==='ECE-A'){
                   url=process.env.REACT_APP_21ECEA
                   getStudentsData(section,url,academicyear)
   
               }
               else if(section==='ECE-B'){
                   url=process.env.REACT_APP_21ECEB
                   getStudentsData(section,url,academicyear)
   
               }
               else if(section==='ECE-C'){
                   url=process.env.REACT_APP_21ECEC
                   getStudentsData(section,url,academicyear)
   
               }
           }
           else if(branch==='MECH'){

            if(section==='MECH-A'){
                url=process.env.REACT_APP_21MECHA
                getStudentsData(section,url,academicyear)

            }
            else if(section==='MECH-B'){
                url=process.env.REACT_APP_21MECHB
                getStudentsData(section,url,academicyear)

            }
        }
            
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
        if(academicyear==='2019-2023'){
                localStorage.setItem(`19${section}`, JSON.stringify(sectiondata));
                const value = JSON.parse(localStorage.getItem(`19${section}`))
                // console.log(value);
                setSectiondata(value);
            
           
        }
        else if(academicyear==='2020-2024'){
            localStorage.setItem(`20${section}`, JSON.stringify(sectiondata));
            const value = JSON.parse(localStorage.getItem(`20${section}`))
            // console.log(value);
            setSectiondata(value);
        
       
        }
        else if(academicyear==='2021-2025'){
            localStorage.setItem(`21${section}`, JSON.stringify(sectiondata));
            const value = JSON.parse(localStorage.getItem(`21${section}`))
            // console.log(value);
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

                {section && <><h2 style={{ marginTop: '12px', marginBottom: '20px',textAlign:'center' }}>{section} Students Details</h2>
                    <p style={{textAlign:'center'}}>Academic Year : {academicyear}</p>
                    <p style={{textAlign:'center'}}>Date : {getDate()}</p>
                </>}
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
                                    <td>{data.I === 'Present' ? <button className='btn btn-success' >P</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 1)} />}</td>
                                    <td>{data.II === 'Present' ? <button className='btn btn-success' >P</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 2)} />}</td>
                                    <td>{data.III === 'Present' ? <button className='btn btn-success'>P</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 3)} />}</td>
                                    <td>{data.IV === 'Present' ? <button className='btn btn-success'>P</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 4)} />}</td>
                                    <td>{data.V === 'Present' ? <button className='btn btn-success' >P</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 5)} />}</td>
                                    <td>{data.VI === 'Present' ? <button className='btn btn-success'>P</button> : <input type={'checkbox'} onChange={() => handlebutton(data.RollNumber, 6)} />}</td>
                                    <td>{total}/6</td>

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




