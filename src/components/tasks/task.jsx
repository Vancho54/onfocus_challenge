import { CheckBoxOutlineBlankOutlined, CheckBoxOutlined, DeleteOutlined, EditOutlined } from '@material-ui/icons';
import taskActions from '../../state/actions/taskActions';
import { Modal, Box } from '@material-ui/core'
import { useState } from 'react';
import EditTask from './editTask'

export const Task = ({task}) => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return(
        <div className='taskCard'>
            <div>
               <p>{task.title}</p>
            </div>
            <div className='optionsContainer'>
                <div>
                    <EditOutlined onClick={handleOpen} style={{cursor: 'pointer'}}/>
                </div>
                <div onClick={() => taskActions.deleteTask(task.id)}>
                    <DeleteOutlined style={{cursor: 'pointer'}}/>
                </div>
                <div onClick={() => taskActions.changeTaskState(task.id)}>
                    {task.completed ? <CheckBoxOutlined style={{cursor: 'pointer'}}/>
                    :
                    <CheckBoxOutlineBlankOutlined style={{cursor: 'pointer'}}/>
                    }
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <EditTask task={task} handleClose={handleClose} />
                </Modal>
            </div>
            <style jsx>
                {`
                    .taskCard {
                        display: flex;
                        padding: 0px 30px 0px 15px;
                        margin: 5px 0px 0px 0px;
                        max-width: 500px;
                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
                        border-radius: 1rem;
                        backdrop-filter: blur(2rem);
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .optionsContainer {
                        display: flex;
                        align-items: center;
                        padding: 0px 5px 0px 5px;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    )
}