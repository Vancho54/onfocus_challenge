import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';
import authReducer from './features/authSlice';
import alertReducer from './features/alertSlice'

const Store = configureStore({
    reducer: {
        task: taskReducer,
        auth: authReducer,
        alert: alertReducer
    }
});

export default Store