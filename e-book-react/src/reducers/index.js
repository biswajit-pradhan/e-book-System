import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import authorReducer from "./Author";
import allPublisher from "./Home/allPublisher";
import allAuthor from "./Home/allAuthor";
import alllatestBook from "./Home/alllatestBook";
import userSignUp from "./User/SignUp/Index";
import login from "./User/LogIn";
import search from "./Search";
import readerBook from "./ReaderBook"
import getbookbyid from "./getbook";
export default combineReducers({book,authorReducer,allPublisher,allAuthor,userSignUp,login,search,readerBook,alllatestBook,getbookbyid})


