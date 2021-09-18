import { createSlice } from '@reduxjs/toolkit';


export const TaskSlice = createSlice({
    name:'task',
    initialState: {
        page: 1,
        take: 6,
        data: []
    },
    reducers: {

        setData: (state, action) => {
            state.data = action.payload
        },

        changeTaskState: (state, action) => {
            state.data.map((d) => (
                d.id === action.payload ? d.completed = !d.completed : null
            ))
        },

        editTask: (state, action) => {
            state.data.map((d, i) => d.id === action.payload.id ? state.data[i] = action.payload : null)
        },

        addTask: (state, action) => {
            state.data.unshift(action.payload)
        },

        deleteTask: (state, action) => {
            state.data = state.data.filter((d) => (
                d.id !== action.payload
            ))
        },

        upPage: (state) => {
            state.page = state.page + 1 
        },

        downPage: (state) => {
            state.page = state.page - 1
        }
    }
})

export const selectTask = (state) => state.task;

export const { setData, changeTaskState, deleteTask, addTask, editTask, downPage, upPage } = TaskSlice.actions;
export default TaskSlice.reducer;