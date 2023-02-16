import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import latestbook from "./Reader";
import userSignUp from "./User/SignUp/Index";
export default combineReducers({book,latestbook,userSignUp})