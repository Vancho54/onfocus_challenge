import { 
    Card, 
    CardContent, 
    TextField, 
    Button, 
    FormControl, 
    FormLabel 
} from '@material-ui/core';
import { useState } from 'react';
import taskActions from '../../state/actions/taskActions'


const EditTask = ({ task, handleClose }) => {

    const [editTask, setEditTask] = useState(task);

    const { title } = editTask;

    const handleChange = event => {
        setEditTask({
            ...editTask,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        taskActions.editTask(editTask);
        handleClose();
    }


    return (
        <div>
            <Card className='containerEdit'>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormLabel className='formLabel'>Edit Task</FormLabel>
                        <FormControl className='formBox'>
                            <TextField 
                                name='title'
                                label='Title'
                                type='text'
                                onChange={handleChange}
                                value={title}
                            />
                        </FormControl>
                        <FormControl>
                            <Button className='buttonEdit'type='submit' variant='contained'>Edit</Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
            <style jsx>
                {`
                    .containerEdit {
                        display: flex;
                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1));
                        border-radius: 1rem;
                        z-index: 4;
                        backdrop-filter: blur(2rem);
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        min-width: 300px;
                        min-height: 200px;
                    }

                    .buttonEdit {
                        display: flex;
                        text-align: justify;
                        margin: 0px 15px 0px 15px;
                        box-sizing: border-box;
                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));
                        border: none;
                        border-radius: 0.5rem;
                        width: 100%;
                    }

                    .formBox {
                        display: flex;
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }

                    .formLabel {
                        padding-top: 20px;
                    }
                `}
            </style>
        </div>
    )
}

export default EditTask;