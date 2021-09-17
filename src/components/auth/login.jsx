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
import authActions from '../../state/actions/authActions';
import { selectAuth } from '../../state/features/authSlice';


export const Login = (props) => {

    const auth = useSelector(selectAuth);

    useEffect(() => {
        if (auth) {
            props.history.push('/tasks')
        }
    }, [auth, props.history])


    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginInfo

    const handleChange = event => {
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (email === process.env.REACT_APP_USER && password === process.env.REACT_APP_PASS) {
            localStorage.setItem('token', process.env.REACT_APP_FAKE_TOKEN)
            authActions.setToken(process.env.REACT_APP_FAKE_TOKEN)
        }
    }

    return(
        <div className='mainContainer'>
            <Card className='container'>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormLabel className='formLabel'>Login</FormLabel>
                        <FormControl className='formBox'>
                            <TextField 
                                name='email'
                                label={'Email'}
                                type='email'
                                onChange={handleChange}
                                value={email}
                            />
                        </FormControl>
                        <FormControl className='formBox'>
                            <TextField 
                                name='password'
                                label={'Password'}
                                type='password'
                                onChange={handleChange}
                                value={password}
                            />
                        </FormControl>
                        <FormControl className='formBox'>
                            <Button className='button' type='submit' color='primary' variant='contained'>Login</Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
            <style jsx>
                {`
                    .mainContainer {
                        display: flex;
                        max-width: 400px;
                        min-width: 300px;
                        margin-top: 30%;
                    }

                    .container {
                        display: flex;
                    }

                    .button {
                        display: flex;
                        text-align: justify;
                        margin: 0px 15px 0px 15px;
                    }

                    .formBox {
                        display: flex;
                        margin-top: 20px;
                    }

                    .formLabel {
                        padding-top: 20px;
                    }
                `}
            </style>
        </div>
    )
}