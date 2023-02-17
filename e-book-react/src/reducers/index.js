import { combineReducers } from "@reduxjs/toolkit";
import book from "./Book";
import authorReducer from "./Author";
export default combineReducers({book,authorReducer})