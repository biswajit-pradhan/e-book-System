import { Provider } from "react-redux";
import {Route, Routes } from "react-router-dom";
// import './App.css';
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import Reader from "./components/Reader";
import Login from './components/User/LogIn';
import SignUp from './components/User/SignUp';
import { store } from "./store";

function App() {
  return (

    <div>
      <Provider store={store}>
      <Routes>
            <Route path="/" element={ <Navbar/>} />
            <Route path="/login" element={ <Login/>} /> 
            <Route path="/signup" element={ <SignUp />} /> 
          </Routes>
          {/* <Book/> */}
          {/* <Reader /> */}
          {/* <SignUp /> */}
      </Provider>
    </div>
  );
}

export default App;
