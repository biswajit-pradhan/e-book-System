import './App.css';
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import Login from './components/User/LogIn';
import SignUp from './components/User/SignUp';
import { store } from "./store";
import Footer from './components/Footer';
import Reader from './components/Reader';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Provider store={store}>
      {/* <Routes>
            <Route path="/" element={ <Navbar/>} />
            <Route path="/login" element={ <Login/>} /> 
            <Route path="/signup" element={ <SignUp />} /> 
          </Routes> */}
          <Book/>
      </Provider>
    </div>
  );
}

export default App;
