import Dispatcher from '../dispatcher/dispatcher';

class UserActions {

    add(user) {
        Dispatcher.dispatch({
            actionType: 'NewUser',
            payload: user
        });
    }

    get(){
        Dispatcher.dispatch({
            actionType:'Get'
        });
    }

}

export default new UserActions();