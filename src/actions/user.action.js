import Dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../constants/actiontypes';

class UserActions {

    add(user) {
        Dispatcher.dispatch({
            actionType: actionTypes.ADD_USER,
            payload: user
        });
    }

    get() {
        Dispatcher.dispatch({
            actionType: actionTypes.GET_USERS
        });
    }

    remove(user) {
        Dispatcher.dispatch({
            actionType:actionTypes.REMOVE_USER,
            payload: user
        });
    }

}

export default new UserActions();