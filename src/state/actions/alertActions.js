import * as alert from '../features/alertSlice';
import Store from '../store';

const alertActions = {

    showAlert: (message) => {
        Store.dispatch(alert.showAlert(message))
        setTimeout(() => {
            Store.dispatch(alert.hideAlert())
        }, 2000)
    }
}

export default alertActions;
