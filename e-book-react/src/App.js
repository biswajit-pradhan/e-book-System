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
import Terms from './components/Terms';
import Contact from './components/Contact';
import PublisherDashBord from './components/Publisher/PublisherDashBord';

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
            <Route path="/author" element={<AuthorDashboard/>}/>
            <Route path="/logout" element={<Logout/>} />
            <Route path="/publisher" element={<PublisherDashBord/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> 
        </div>
        <footer className="footer--pin">
          <Footer />
        </footer>

      </Provider> 
      
    </div>
  );
}

export default App;
