import React from 'react';
import { Redirect, Link, Switch, Route } from 'react-router-dom';
import More from './more.component';
import Reviews from './reviews.component';

export default (props) => {

    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <div className="nav nav-tabs">
                <li className={props.location.pathname === '/users/' + props.match.params.id + '/reviews' ? 'active' : 'inactive'}>
                    <Link to={'/users/' + props.match.params.id + '/reviews'}>Reviews</Link>
                </li>
                <li className={props.location.pathname === '/users/' + props.match.params.id + '/more' ? 'active' : 'inactive'}>
                    <Link to={'/users/' + props.match.params.id + '/more'}>More</Link>
                </li>
            </div>
            <div>
                <Switch>
                    <Redirect from={'/users/' + props.match.params.id} to={'/users/' + props.match.params.id + '/more'} exact={true} />
                    <Route path={'/users/' + props.match.params.id + '/more'} exact={true} component={More} />
                    <Route path={'/users/' + props.match.params.id + '/reviews'} exact={true} component={Reviews} />
                </Switch>
            </div>

        </div>
    )
}