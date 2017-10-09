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

        this.onRemove = this.onRemove.bind(this);
    }

    componentDidMount() {
        UserStore
            .getAll()
            .then((response) => this.setState({ users: response.data, loading: false }));
    }

    onchange() {
        console.log('hitting on change');
        this.setState({
            users: UserStore.getAll()
        });
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this.onchange);
    }

    onRemove(data) {
        console.log("remove on parent", data);
        this.loadData();
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