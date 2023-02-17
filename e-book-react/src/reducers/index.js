import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import latestbook from "./Reader";
import userSignUp from "./User/SignUp/Index";
import login from "./User/LogIn";
import search from "./Search";
export default combineReducers({book,latestbook,userSignUp,login,search})