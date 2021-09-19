import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
    msg: ''
}

const alertSlice = createSlice({
    name:'alert',
    initialState,
    reducers: {
        showAlert: (state, action) => {
            state.show = true
            state.msg = action.payload
        },

        hideAlert: (state, _action) => {
            state.show = false
            state.msg = ''
        }
    }
})

export const selectAlert = state => state.alert

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;