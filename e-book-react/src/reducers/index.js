import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import publbook from "./Publisher";

import authorReducer from "./Author";
import allPublisher from "./Home/allPublisher";
import allAuthor from "./Home/allAuthor";
import alllatestBook from "./Home/alllatestBook";
import userSignUp from "./User/SignUp/Index";
import login from "./User/LogIn";
import search from "./Search";
import readerBook from "./ReaderBook"
import getBooksDataByReaderId from "./ReaderBook/getBooksDataByReaderId"
import getbookbyid from "./getbook";
//It is combined reducer whaere all the reducers combine and get called in to store
export default combineReducers({getBooksDataByReaderId,book,authorReducer,publbook,allPublisher,allAuthor,userSignUp,login,search,readerBook,alllatestBook,getbookbyid})


