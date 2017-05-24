import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from 'views/app';
import LoginPage from 'views/login/LoginPage';
import Dashboard from 'views/dashboard';
import NewUser from 'views/newUser/NewUser';
import NotFound from 'views/notFound';
import AllCars from 'views/cars/AllCars';
import CarRegister from 'views/carRegister/CarRegister';
import TransferCar from 'views/carTransfer/TransferCar';
const publicPath = '/';

export const routeCodes = {
    LOGIN: publicPath,
    USERS: `${ publicPath }allUsers`,
    INVITE_USER: `${ publicPath }inviteUser`,
    CARS: `${ publicPath }allCars`,
    REGISTER_CAR: `${ publicPath }registerCar`,
    TRANSFER_CAR: `${ publicPath }transferCar`
};

export default class Routes extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path={ publicPath } component={ App }>
                    <IndexRoute component={ LoginPage }/>
                    <Route path={ routeCodes.LOGIN } component={ LoginPage }/>
                    <Route path={ routeCodes.USERS } component={ Dashboard }/>
                    <Route path={ routeCodes.INVITE_USER } component={ NewUser }/>
                    <Route path={ routeCodes.CARS } component={ AllCars }/>
                    <Route path={ routeCodes.REGISTER_CAR } component={ CarRegister }/>
                    <Route path={ routeCodes.TRANSFER_CAR } component={ TransferCar }/>
                    <Route path='*' component={ NotFound }/>
                </Route>
            </Router>
        );
    }
}
