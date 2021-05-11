import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Slices/Counter";
import userReducer from "./Slices/User";

export default configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer
    }
})