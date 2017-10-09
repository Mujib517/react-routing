import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';

const CHANGE = 'change';

class UserStore extends EventEmitter {

    constructor() {
        super();

        Dispatcher.register(this._register.bind(this));
    }

    _register(action) {
        switch (action.actionType) {
            case 'NewUser':
                this.addNewUser(action.payload);
                break;
            case 'Get':
                this.getAll();
                break;
            case 'Delete':
                this.remove(action.payload);
                break;
        }
        this.emitChange();
    }

    addNewUser(user) {
        
    }

    getAll() {
        return axios.get("https://api.github.com/users");
    }

    remove(user) {
        console.log('deleting', user);
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

    emitChange() {
        this.emit(CHANGE);
    }
}

export default new UserStore();