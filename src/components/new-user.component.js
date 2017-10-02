import React from 'react';
import { history, withRouter } from 'react-router-dom';

class NewUser extends React.Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    save() {
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <h1>Add new user</h1>
                <button onClick={this.save}>Save</button>
            </div>
        )
    }
}


export default NewUser;