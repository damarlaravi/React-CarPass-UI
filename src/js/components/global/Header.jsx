import React, {Component} from 'react';
import {Link} from 'react-router';
import {routeCodes} from '../../routes';
export default class Menu extends Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        window.location = routeCodes.LOGIN;
        //this.props.router.push(routeCodes.LOGIN);
    }

    render() {
        return (
            <div className="container header-content">
                <img src={require('../../../assets/img/app_logo.png')}/>
                <div className="welcome welcome-desktop">
                    <h2>Welcome Admin
                        <span>Last Login: 14-May-2017 20:26 IST</span>
                    </h2>
                    <div className="user-login dropdown">
                        <span>U</span>
                        <a id="usr-profile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-caret-down" aria-hidden="true"/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="usr-profile">
                            <i className="fa fa-user" aria-hidden="true"/>
                            <span>UserName</span>
                            <span>Role: Manager<br />My Account</span>
                            <button className="btn btn-primary btn-logout" type="submit"
                                    onClick={this.logOut}>Signout
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-toggleable-md navbar-inverse">
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <Link className="nav-link" to={ routeCodes.USERS } activeClassName="active"
                                  onlyActiveOnIndex>
                                All Users
                            </Link>
                            <Link className="nav-link" to={ routeCodes.INVITE_USER } activeClassName="active"
                                  onlyActiveOnIndex>
                                Invite New User
                            </Link>
                            <Link className="nav-link" to={ routeCodes.CARS } activeClassName="active"
                                  onlyActiveOnIndex>
                                See All Cars
                            </Link>
                            <Link className="nav-link" to={ routeCodes.REGISTER_CAR } activeClassName="active"
                                  onlyActiveOnIndex>
                                Register Car
                            </Link>
                            <Link className="nav-link" to={ routeCodes.TRANSFER_CAR } activeClassName="active"
                                  onlyActiveOnIndex>
                                Transfer Car
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
