import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import publbook from "./Publisher";

import authorReducer from "./Author";
import allPublisher from "./Reader/allPublisher";
import allAuthor from "./Reader/allAuthor";
import userSignUp from "./User/SignUp/Index";
import login from "./User/LogIn";
import search from "./Search";
export default combineReducers({book,publbook,allPublisher,allAuthor,userSignUp,login,search})

