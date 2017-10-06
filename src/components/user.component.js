import React from 'react';
import { Link } from 'react-router-dom';

export default class UserComponent extends React.Component {

    constructor(props) {
        super(props);

        this.onRemove = this.onRemove.bind(this);
    }

    onRemove() {
        this.props.onRemove({data:"message"});
    }

    render() {
        return (
            <div className="well">
                <img src={this.props.user.avatar_url} width="150" height="150" className="img img-circle" />
                <div>
                    <Link to={'/users/' + this.props.user.login} > {this.props.user.login}</Link>
                    <button className="btn btn-danger btn-sm pull-right" onClick={this.onRemove}>
                        Remove &nbsp;
                        <i className="glyphicon glyphicon-remove"></i>
                    </button>
                </div>
            </div>
        );
    }
}
