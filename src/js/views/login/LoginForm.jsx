import React from 'react';
import PropTypes from 'prop-types'

//import '../css/font-awesome.css';

const LoginForm = ({
                       onSubmit,
                       onChange,
                       user
                   }) => (
    <div>
        <div className="container">
            <nav className="navbar navbar-toggleable-md navbar-inverse">
                <a className="navbar-brand"><img src={require('../../../assets/img/app_logo.png')}/></a>
                <div className="home-caption">
                    <h2>Drive in The City & Outstation</h2>
                    <span>We simplified car rentals, so you can focus<br />on what's important to you</span>
                </div>
            </nav>
        </div>
        <div className="container login-form">
            <div className="col-sm-5 form-signin">
                <h1 className="head">
                    <div>Login</div>
                    <span>Let's get started...</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <label className="sr-only">
                        <i className="fa fa-users" aria-hidden="true"/>
                        User Name</label>
                    <input type="text" id="inputEmail" className="form-control"
                           placeholder="User Name"
                           name="username"
                           onChange={onChange}
                           value={user.username}
                           required/>
                    <label className="sr-only">
                        <i className="fa fa-lock" aria-hidden="true"/>
                        Password</label>
                    <input type="password" id="inputPassword" className="form-control"
                           placeholder="Password"
                           name="password"
                           onChange={onChange}
                           value={user.password}
                           required/>
                    <button className="btn-block" type="submit">&nbsp;</button>
                </form>

            </div>
        </div>
    </div>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;
