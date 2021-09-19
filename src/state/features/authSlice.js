import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login: (state, _action) => {
            state.auth = true
        }
    }
})

export const selectAuth = state => state.auth.auth

export const { login } = authSlice.actions;
export default authSlice.reducer;