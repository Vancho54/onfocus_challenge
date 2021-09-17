import { createSlice } from '@reduxjs/toolkit';


export const TaskSlice = createSlice({
    name:'task',
    initialState: {
        currentTask: {},
        data: []
    },
    reducers: {

        choseCurrentTask: (state, action) => {
            state.currentTask = action.payload
        },

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
    }
})

export const selectTask = (state) => state.task.data;

export const { setData, changeTaskState, deleteTask, addTask, choseCurrentTask, editTask } = TaskSlice.actions;
export default TaskSlice.reducer;