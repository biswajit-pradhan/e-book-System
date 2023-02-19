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
import Search from './components/Search';
import BookByAuthor from './components/Author/BookByAuthor';
import AddBook from './components/Author/AddBook';
import AuthorDashboard from './components/Author/AuthorDashboard';

import Logout from './components/User/Logout';
import Home from './components/Home';
import ReaderBook from './components/ReaderBook';

function App() {
  return (
    <div>
      <Provider store={store}>

        <div className="content-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<Book />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/logout" element={<Logout/>} />
          </Routes> 
            {/* <Route path="/author" element={<AuthorDashboard/>}/> */}
          {/* </Routes> */} 
          {/* </Routes> */}
          {/* <SignUp /> */}
          {/* <Login /> */}
          {/* <Reader/> */}
          {/* <Book/> */}
          {/* <Search/> */}
          {/* <ReaderBook /> */}
      
        </div>
        <footer className="footer--pin">
          <Footer />
        </footer>

      </Provider>
    </div>
  );
}

export default App;
