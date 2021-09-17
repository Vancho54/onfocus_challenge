import { useEffect } from "react"
import { useSelector } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { selectTask } from "../../state/features/taskSlice"
import taskActions from '../../state/actions/taskActions'

import { Task } from './task'
import AddTask from "./addTask"
import EditTask from "./editTask"

export const Tasks = () => {

    const tasks = useSelector(selectTask);

    useEffect(() => {
        fetch(process.env.REACT_APP_URI)
            .then(response => response.json())
            .then(data => taskActions.setData(data))
    }, [])


    return(
        <div className='mainContainer'>
            <div className='formContainer'>
                <AddTask />
                <EditTask />
            </div>
            <ul>
                {tasks.length === 0 ? <li><p>No tasks available</p></li> 
                :
                <TransitionGroup>
                        {tasks.map((task) => (
                            <CSSTransition
                                key={task.id}
                                timeout={300}
                                classNames='task'
                            >
                                <Task 
                                    task={task}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <style jsx>
                {`
                    .mainContainer {
                        display: flex;
                        flex-direction: row-reverse
                    }

                    .formContainer {
                        display: flex;
                        flex-direction: column;
                    }

                    .task-enter {
                        opacity: 0;

                    }
                    .task-enter-active {
                        opacity: 1;
                        transition: opacity 300ms;
                    }

                    .task-exit {
                        opacity: 1
                    }

                    .task-exit-active {
                        opacity: 0;
                        transition: opacity 300ms
                    }
                `}
                </style>
        </div>
    )
}