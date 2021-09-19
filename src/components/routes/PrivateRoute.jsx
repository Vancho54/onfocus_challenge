import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectAuth } from '../../state/features/authSlice';

const PrivateRoute = ({ component: Component, ...props }) => {

    const auth = useSelector(selectAuth)

    return (
        <Route {...props} render={ props => !auth ? 
            (<Redirect to='/' />)
            :
            (<Component {...props}/>
        )}/>
    )
}

export default PrivateRoute