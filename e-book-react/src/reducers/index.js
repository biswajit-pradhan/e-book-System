import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import authorReducer from "./Author";
import allPublisher from "./Reader/allPublisher";
import allAuthor from "./Reader/allAuthor";
import alllatestBook from "./Reader/alllatestBook";
import userSignUp from "./User/SignUp/Index";
import login from "./User/LogIn";
import search from "./Search";
<<<<<<< HEAD
export default combineReducers({book,authorReducer,allPublisher,allAuthor,userSignUp,login,search})
=======
import readerBook from "./ReaderBook"
export default combineReducers({book,allPublisher,allAuthor,userSignUp,login,search,readerBook,alllatestBook})
>>>>>>> eab72efb688f668d3065b47878695b4a890b963d

