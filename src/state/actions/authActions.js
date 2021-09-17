import * as auth from '../features/authSlice';
import Store from '../store';

const authActions = {

    setToken: (token) => {
        Store.dispatch(auth.setToken(token))
    }
}

export default authActions;

