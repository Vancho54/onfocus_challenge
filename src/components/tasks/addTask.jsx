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
import { v4 as uuidv4 } from 'uuid'


const AddTask = () => {

    const [newTask, setNewTask] = useState({
        title: '',
        completed: false,
        id: uuidv4()
    })

    const { title } = newTask;

    const handleChange = event => {
        setNewTask({
            ...newTask,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        taskActions.addTask(newTask)
        setNewTask({
            title: '',
            id: uuidv4(),
            completed: false
        })
    }


    return (
        <div>
            <Card className='container'>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormLabel className='formLabel'>Add a new task</FormLabel>
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
                            <Button className='button' type='submit' variant='contained'>Add new task</Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
            <style jsx>
                {`
                    .container {
                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
                        border-radius: 2rem;
                        z-index: 2;
                        backdrop-filter: blur(2rem);
                        display: flex;
                    }

                    .button {
                        display: flex;
                        text-align: justify;
                        align-content: center;
                        margin: 0px 15px 0px 15px;
                        box-sizing: border-box;
                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));
                        border: none;
                        border-radius: 0.5rem;
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

export default AddTask;