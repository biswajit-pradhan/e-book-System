import { Provider } from "react-redux";
import {Route, Routes } from "react-router-dom";
// import './App.css';
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import Login from './components/User/LogIn';
import SignUp from './components/User/SignUp';
import { store } from "./store";
import Publisher from "./components/Publisher";
import PublishBook from "./components/Publisher/publishBook";
import { BookList } from "./components/Publisher/deleteBook";

function App() {
  return (

    <div>
      <Provider store={store}>
      {/* <Routes>
            <Route path="/" element={ <Navbar/>} />
            <Route path="/login" element={ <Login/>} /> 
            <Route path="/signup" element={ <SignUp />} /> 
          </Routes> */}
          {/* <Book/> */}
          {/* <Publisher/> */}
          {/* <PublishBook/> */}
          <BookList/>
      </Provider>
    </div>
  );
}

export default App;
