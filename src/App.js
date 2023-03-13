import './App.css';
import { useRef } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import DisplayStudentsDetails from './Components/DisplayStudentsDetails';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App" >
     
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/cse-a' element={<DisplayStudentsDetails/>}></Route>
          <Route exact path='/cse-b' element={<DisplayStudentsDetails/>}></Route>
          <Route exact path='/cse-c' element={<DisplayStudentsDetails/>}></Route>
          <Route exact path='/cse-d' element={<DisplayStudentsDetails/>}></Route>
          <Route exact path='/cse-e' element={<DisplayStudentsDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
