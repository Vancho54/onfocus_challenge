import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fakeToken: localStorage.getItem('token'),
    auth: null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.fakeToken = action.payload
            state.auth = true
        }
    }
})

export const selectAuth = state => state.auth.auth

export const { setToken } = authSlice.actions;
export default authSlice.reducer;