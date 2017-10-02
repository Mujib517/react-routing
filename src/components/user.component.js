import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    return (
        <div class="well">
            <Link to={'/users/' + props.user.login} > {props.user.login}</Link>
        </div>
    );
}