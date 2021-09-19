import * as auth from '../features/authSlice';
import Store from '../store';

const authActions = {

    setToken: () => {
        Store.dispatch(auth.login())
    }
}

export default authActions;

