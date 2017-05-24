import React from 'react';
import PropTypes from 'prop-types'
import LoginForm from './LoginForm.jsx';
import {routeCodes} from '../../routes';
class LoginPage extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                username: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        // create a string for an HTTP body message
        const username = encodeURIComponent(this.state.user.username);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `username=${username}&password=${password}`;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:5000/auth');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', (data) => {
            if (xhr.status === 200) {
                // success
                let usrObj = data.currentTarget.response;
                if(usrObj.username === 'Ravi' && usrObj.password === '123'){
                    console.log(' Coming here in to Router', routeCodes.USERS);
                    // change the component-container state
                    //this.props.router.push(routeCodes.USERS);
                    //this.context.router.push(routeCodes.USERS);
                    window.location = routeCodes.USERS;
                }
                else {
                    this.setState({
                        errors: 'login failed'
                    });
                }
                this.setState({
                    errors: {}
                });
                //console.log('The form is valid', usrObj);
            } else {
                // failure

                // change the component state
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send(formData);
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <LoginForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }
}

export default LoginPage;
