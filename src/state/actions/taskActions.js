import * as task from '../features/taskSlice';
import Store from '../store';


const taskActions = {

    editTask: (editedTask) => {
        Store.dispatch(task.editTask(editedTask))
    },

    addTask: (newTask) => {
        Store.dispatch(task.addTask(newTask))
    },

    setData: (data) => {
        Store.dispatch(task.setData(data))
    },

    deleteTask: (taskId) => {
        Store.dispatch(task.deleteTask(taskId))
    },

    changeTaskState: (taskId) => {
        Store.dispatch(task.changeTaskState(taskId))
    },

    upPage: () => {
        Store.dispatch(task.upPage())
    },

    downPage: () => {
        Store.dispatch(task.downPage())
    }
}

export default taskActions;