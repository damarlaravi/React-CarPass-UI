import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "../../components/global/Header";
import UsersList from "./UsersList";

export default class Dashboard extends Component {
    static propTypes = {
        allUsers: PropTypes.array
    };

    constructor() {
        super();
        this.state = {
            allUsers: []
        };
        this.getUsers();
        this.deleteUser = this.deleteUser.bind(this);
    }

    getUsers() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:5000/getAllUsers', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', (data) => {
            if (xhr.status === 200) {
                //this.state.allUsers = data.currentTarget.response;
                this.setState({allUsers: data.currentTarget.response});
                console.log(" Users coming ", this.state.allUsers);
            }
            else {
                // failure
                // change the component state
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;
                this.setState({
                    errors
                });
            }
        });
        xhr.send({});
        //this.state.allUsers = CarPassService.getAllUsers('getAllUsers');
    }

    deleteUser(index) {
        let users = [...this.state.allUsers];
        users.splice(index, 1);
        this.setState({allUsers: users});
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>FORE NAME</th>
                            <th>SURE NAME</th>
                            <th>DATE OF REGISTRATION</th>
                            <th>ROLE</th>
                            <th>USER NAME</th>
                            <th>PASSWORD</th>
                            <th>MAIL</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.allUsers.length > 0 && this.state.allUsers.map((user, i) =>
                            <UsersList key={i}
                                       {...user}
                                       onClick={this.deleteUser.bind(user, i)}/>
                        )}
                        </tbody>
                    </table>
                </div>
                )
            </div>
        );
    }
}
