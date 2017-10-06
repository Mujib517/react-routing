import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    return (
        <div className="well">
            <img src={props.user.avatar_url} width="150" height="150" className="img img-circle" />
            <div>
                <Link to={'/users/' + props.user.login} > {props.user.login}</Link>
                <button className="btn btn-danger btn-sm pull-right">
                    Remove &nbsp;
                    <i className="glyphicon glyphicon-remove"></i>
                </button>
            </div>

        </div>
    );
}