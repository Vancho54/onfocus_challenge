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
import alertActions from '../../state/actions/alertActions';
import authActions from '../../state/actions/authActions';
import { selectAlert } from '../../state/features/alertSlice';
import { selectAuth } from '../../state/features/authSlice';


export const Login = (props) => {

    const auth = useSelector(selectAuth);
    const alert = useSelector(selectAlert);

    console.log(alert)

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
            authActions.setToken()
        } else {
            alertActions.showAlert('Incorrect password or user')
        }
    }

    return(
        <div className='mainContainer'>
            {alert.show ? <div className='error'>{alert.msg}</div> : null}
            <Card className='container'>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormLabel className='formLabel'>Login</FormLabel>
                        <FormControl className='formBox'>
                            <TextField 
                                name='email'
                                label='Email'
                                type='email'
                                onChange={handleChange}
                                value={email}
                            />
                        </FormControl>
                        <FormControl className='formBox'>
                            <TextField 
                                name='password'
                                label='Password'
                                type='password'
                                onChange={handleChange}
                                value={password}
                            />
                        </FormControl>
                        <FormControl className='formBox'>
                            <Button className='button' type='submit' variant='contained'>Login</Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <style jsx>
                {`
                    .mainContainer {
                        display: flex;
                        max-width: 50vw;
                        min-width: 25vw;
                        min-height: 50vh;
                    }

                    .container {
                        background: white;
                        min-height: 40vh;
                        width: 90%;
                        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
                        border-radius: 2rem;
                        z-index: 4;
                        backdrop-filter: blur(2rem);
                        display: flex;
                        align-content: center;
                        justify-content: center;
                    }

                    .button {
                        display: flex;
                        text-align: justify;
                        margin: 0px 15px 0px 15px;
                        box-sizing: border-box;
                        background: linear-gradient(to right top, rgb(109, 218, 226, 0.7), rgb(109, 218, 226, 0.3));
                        border: none;
                        width: 70%;
                        margin-top: 1rem;
                        height: 2rem;
                        border-radius: 0.5rem;
                        font-size: 1.2rem;
                    }

                    .formBox {
                        display: flex;
                        margin-top: 30px;
                    }

                    .formLabel {
                        padding-top: 30px;
                    }
                `}
            </style>
        </div>
    )
}