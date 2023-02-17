import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import allPublisher from "./Reader/allPublisher";
import allAuthor from "./Reader/allAuthor";
import userSignUp from "./User/SignUp/Index";
export default combineReducers({book,allPublisher,allAuthor,userSignUp})