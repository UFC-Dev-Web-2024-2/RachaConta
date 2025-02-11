import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageFriends from '../components/Friends/ManagerFriends';
import ManagePayment from '../components/Payment/ManagerPayments';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/manage-friends" component={ManageFriends} />
                <Route path="/manage-payment" component={ManagePayment} />
            </Switch>
        </Router>
    );
};

export default Routes;