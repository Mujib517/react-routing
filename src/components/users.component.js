import React from 'react';
import User from './user.component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './spinner.component';
import UserStore from '../stores/user.store';

export default class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = { users: [], loading: true };

        UserStore.addChangeListener(this.onChange.bind(this));

    }

    onChange() {
        UserStore
            .getAll()
            .then((response) => this.setState({ users: response.data, loading: false }));
    }

    componentDidMount() {
        this.onChange();
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this.onchange);
    }

    render() {
        let users = this.state.users;
        return (
            <div>

                <Link to="users/new">New User</Link>
                <Spinner loading={this.state.loading} />
                {users.map(usr => <User key={usr.id} user={usr} onRemove={this.onRemove} />)}
            </div>
        )
    }
}