import React from 'react';
import User from './user.component';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = { users: [] };
        this.loadData();
    }

    loadData() {
        axios.get('https://api.github.com/users')
            .then(response => {
                console.log(response.data);
                this.setState({ users: response.data });
            });
    }

    render() {
        let users = this.state.users;
        return (
            <div>
                <Link to="users/new">New User</Link>
                {users.map(usr => <User key={usr.login} user={usr} />)}
            </div>
        )
    }
}