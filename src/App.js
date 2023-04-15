import './App.css';
import { useRef, useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import DisplayStudentsDetails from './Components/DisplayStudentsDetails';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  const [academicyear,setAcademicyear]=useState('');
  const [branch,setBranch] = useState('')
  return (
    <div className="App" >
     
      <Router>
      <Header academicyear={academicyear} setAcademicyear={setAcademicyear} setBranch={setBranch} branch={branch}/>
        <Routes>
          <Route exact path='/' element={<Home academicyear={academicyear} setAcademicyear={setAcademicyear} setBranch={setBranch}/>}></Route>
          <Route exact path='/:academicyear/:sec' element={<DisplayStudentsDetails academicyear={academicyear} setAcademicyear={setAcademicyear} branch={branch} setBranch={setBranch}/>}></Route>
          {/* <Route exact path='/:sec' element={<DisplayStudentsDetails academicyear={academicyear} setAcademicyear={setAcademicyear} branch={branch} setBranch={setBranch}/>}></Route>
          <Route exact path='/:sec' element={<DisplayStudentsDetails academicyear={academicyear} setAcademicyear={setAcademicyear} branch={branch} setBranch={setBranch}/>}></Route>
          <Route exact path='/' element={<DisplayStudentsDetails academicyear={academicyear} setAcademicyear={setAcademicyear} branch={branch} setBranch={setBranch}/>}></Route>
          <Route exact path='/cse-e' element={<DisplayStudentsDetails academicyear={academicyear} setAcademicyear={setAcademicyear} branch={branch} setBranch={setBranch}/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
