import {Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Login from './components/User/LogIn';
import SignUp from './components/User/SignUp';

function App() {
  return (

    <div>
      <Routes>
            <Route path="/" element={ <Navbar/>} />
            <Route path="/login" element={ <Login/>} /> 
            {/* <Route path="/" element={ <SignUp />} />  */}
            <Route path="/signup" element={ <SignUp />} /> 
          </Routes>
    </div>
  );
}

export default App;
