import * as task from '../features/taskSlice';
import Store from '../store';


const taskActions = {

    choseCurrentTask: (current) => {
        Store.dispatch(task.choseCurrentTask(current))
    },

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
    }
}

export default taskActions;