import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
    remenberCheck: false
}


export const loginUserSlice = createSlice({
    name: 'loginUser',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },

        setPassword: (state, action) => {
            state.password = action.payload
        },

        setRemenberCheck: (state) => {
            state.remenberCheck = !state.remenberCheck
        },   

        resetEmailPassword: (state) => {
            state.email = initialState.email
            state.password = initialState.password
            state.remenberCheck = false
        }
    }
})

export const {setEmail, setPassword, resetEmailPassword, setRemenberCheck} = loginUserSlice.actions
export default loginUserSlice.reducer