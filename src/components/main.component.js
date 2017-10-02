import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.component';
import About from './about.component';
import Contact from './contact.component';
import Users from './users.component';
import UserDetailComponent from './user-detail.component';
import NewUser from './new-user.component';

const Main = () => {

    return (
        <main class="container">

            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/users" exact={true} component={Users} />
                <Route path="/users/new" exact={true} component={NewUser} />
                <Route path="/users/:id" component={UserDetailComponent} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </main>
    )
}


export default Main;