import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
//it stores the states of all components and send back it to component
export const store = createStore(
    reducers ,compose(applyMiddleware(thunk))
);    