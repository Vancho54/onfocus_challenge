import { 
    Card, 
    CardContent, 
    TextField, 
    Button, 
    FormControl, 
    FormLabel 
} from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import taskActions from '../../state/actions/taskActions'
import { selectTask } from '../../state/features/taskSlice';


const EditTask = () => {

    //const { currentTask } = useSelector(selectTask)

    //useEffect(() => {
    //    setEditTask(currentTask)
    //}, [currentTask])

    const [editTask, setEditTask] = useState({
        title: '',
        completed: false,
        id: ''
    })

    const { title } = editTask;

    const handleChange = event => {
        setEditTask({
            ...editTask,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
            taskActions.editTask(editTask)
            setEditTask({
                completed: false,
                title: false,
                id: ''
            })
    }


    return (
        <div>
            <Card className='container'>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormLabel className='formLabel'>Edit Task</FormLabel>
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
                            <Button type='submit' color='primary' variant='contained'>Edit</Button>
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

export default EditTask;