import Dispatcher from '../dispatcher/dispatcher';

class UserActions {

    add(user) {
        Dispatcher.dispatch({
            actionType: 'NewUser',
            payload: user
        });
    }

}

export default new UserActions();