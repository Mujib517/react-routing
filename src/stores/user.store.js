import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';
import actionTypes from '../constants/actiontypes';

const CHANGE = 'change';

class UserStore extends EventEmitter {

    constructor() {
        super();

        Dispatcher.register(this._register.bind(this));
    }

    _register(action) {
        switch (action.actionType) {
            case actionTypes.ADD_USER:
                this.addNewUser(action.payload);
                break;
            case actionTypes.GET_USERS:
                this.getAll();
                break;
            case actionTypes.REMOVE_USER:
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