import {Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Publisher from "./components/Publisher";
import Login from './components/User/LogIn';
import SignUp from './components/User/SignUp';


function App() {
  return (

    <div>
      {/* <Routes>
            <Route path="/gdhd" element={ <Navbar/>} />
            <Route path="/login" element={ <Login/>} /> 
            <Route path="/signup" element={ <SignUp />} />
            <Route path="/" element={ } />
      </Routes> */}
      <Publisher/>
      
    </div>
  );
}

export default App;
