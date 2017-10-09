import Dispatcher from '../dispatcher/dispatcher';

class UserActions {

    add(user) {
        Dispatcher.dispatch({
            actionType: 'NewUser',
            payload: user
        });
    }

    get() {
        Dispatcher.dispatch({
            actionType: 'Get'
        });
    }

    remove(user) {
        Dispatcher.dispatch({
            actionType: 'Delete',
            payload: user
        });
    }

}

export default new UserActions();