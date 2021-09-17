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
        id: ''
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
            setNewTask({
                ...newTask,
                id: uuidv4()
            })
            taskActions.addTask(newTask)
            setNewTask({
                title: '',
                id: ''
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
                                label='title'
                                type='text'
                                onChange={handleChange}
                                value={title}
                            />
                        </FormControl>
                        <FormControl>
                            <Button type='submit' color='primary' variant='contained'>Add new task</Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        margin: 20px
                    }

                    .button {
                        display: flex;
                        text-align: justify;
                        margin: 0px 15px 0px 15px;
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