import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';
import authReducer from './features/authSlice'

const Store = configureStore({
    reducer: {
        task: taskReducer,
        auth: authReducer
    }
});

export default Store