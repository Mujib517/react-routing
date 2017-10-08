import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'change';

class UserStore extends EventEmitter {

    constructor() {
        super();

        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case 'NewUser':
                this.addNewUser(action.payload);
                break;
        }
    }

    addNewUser(user) {
        console.log("user is being added", user);
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }
}


export default new UserStore();