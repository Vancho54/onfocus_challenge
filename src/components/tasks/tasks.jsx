import { useEffect } from "react"
import { useSelector } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { selectTask } from "../../state/features/taskSlice"
import taskActions from '../../state/actions/taskActions'
import { Button } from '@material-ui/core'
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@material-ui/icons'

import Task from './Task'
import AddTask from "./AddTask"

const Tasks = () => {

    const tasks = useSelector(selectTask);

    useEffect(() => {
        fetch(process.env.REACT_APP_URI)
            .then(response => response.json())
            .then(data => taskActions.setData(data))
    }, [])

    console.log(tasks.data.slice((tasks.page - 1) * tasks.take, tasks.take * tasks.page))

    return(
        <div className='wrapper'>
            <div className='mainContainer'>
                <div className='formContainer'>
                    <AddTask />
                </div>
                <div className='taskContainer'>
                    <ul>
                        {tasks.data.length === 0 ? <li><p>No tasks available</p></li> 
                        :
                        <TransitionGroup>
                                {tasks.data.slice((tasks.page - 1) * tasks.take, tasks.take * tasks.page).map((task) => (
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
                    <div className='arrowContainer'>
                        <Button className='buttonArrow' variant='contained' onClick={taskActions.downPage}>
                            <KeyboardArrowLeftRounded/>
                            <p>Prev</p>
                        </Button>
                        <div>
                            <p>{tasks.page}</p>
                        </div>
                        <Button className='buttonArrow' variant='contained' onClick={taskActions.upPage}>
                            <p>Next</p>
                            <KeyboardArrowRightRounded/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
                <style jsx>
                    {`
                    .arrowContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    } 
                        
                    .buttonArrow {
                        display: flex;
                        text-align: justify;
                        margin-left:15px;
                        margin-right: 15px;
                        max-height: 40px;
                        box-sizing: border-box;
                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));
                        border: none;
                        border-radius: 0.5rem;
                    }

                    .wrapper {
                        display: flex;
                        flex-direction: column;
                    }

                    .taskContainer {
                        display: flex;
                        flex-direction: column;
                        max-height: 500px;

                    }

                    .mainContainer {
                        display: flex;
                        padding: 0px 30px 0px 15px;
                        margin: 5px 0px 0px 0px;
                        max-width: 900px;
                        min-height: 600px;
                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3));
                        border-radius: 1rem;
                        z-index: 4;
                        backdrop-filter: blur(2rem);
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .formContainer {
                        display: flex;
                        flex-direction: column;
                        margin-top: 16px;
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

export default Tasks;