import { CheckBoxOutlineBlankOutlined, CheckBox, DeleteOutlined, Edit } from '@material-ui/icons';
import taskActions from '../../state/actions/taskActions';

export const Task = ({task}) => {

    

    return(
        <div className='taskCard' onClick={() => taskActions.choseCurrentTask(task)}>
            <div>
               <h4>{task.title}</h4>
            </div>
            <div className='optionsContainer'>
                <div>
                    <Edit onClick={ taskActions.choseCurrentTask(task) } style={{cursor: 'pointer'}}/>
                </div>
                <div onClick={() => taskActions.deleteTask(task.id)}>
                    <DeleteOutlined style={{cursor: 'pointer'}}/>
                </div>
                <div onClick={() => taskActions.changeTaskState(task.id)}>
                    {task.completed ? <CheckBox style={{cursor: 'pointer'}}/>
                    :
                    <CheckBoxOutlineBlankOutlined style={{cursor: 'pointer'}}/>
                    }
                </div>
            </div>
            <style jsx>
                {`
                    .taskCard {
                        display: flex;
                        padding: 0px 5px 0px 5px;
                        margin: 5px 0px 0px 0px;
                        max-width: 500px;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        border-style: solid;
                        border-color: gray;
                        border-width: 2px;
                        border-radius: 15px;
                        background: #fff;
                    }

                    .optionsContainer {
                        display: flex;
                        align-items: center;
                        padding: 0px 5px 0px 5px;
                        justify-content: space-between;
                    }

                    .buttonDone {
                        border: none;
                        border-radius: 10px;
                        background: rgba(26, 83, 255,0.9);
                        width: 75px;
                        height: 25px;
                        color: #fff;
                        cursor: pointer;
                    }

                    .buttonPending {
                        border: none;
                        border-radius: 10px;
                        background: rgba(255, 51, 51, 0.9);
                        width: 75px;
                        height: 25px;
                        color: #fff;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    )
}