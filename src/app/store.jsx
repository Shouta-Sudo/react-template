import { configureStore } from "@reduxjs/toolkit";
import LoginUserSlice from "../slicies/login/LoginUserSlice";

export const store = configureStore({
    reducer: {
        loginUser: LoginUserSlice,
    }
})