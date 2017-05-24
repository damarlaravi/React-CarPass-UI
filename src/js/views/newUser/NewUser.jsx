import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/global/Header";

class NewUser extends React.Component {
    constructor() {
        super();
        this.state = {
            newUser: {},
            userRoles: [
                {
                    "id": 1,
                    "role": "ADMIN"
                },
                {
                    "id": 2,
                    "role": "Fleet Manager"
                },
                {
                    "id": 3,
                    "role": "Driver"
                }, {
                    "id": 4,
                    "role": "Work Shop Manage"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="container header-content">
                        <div className="col-sm-5 new-user">
                            <h1>Role</h1>
                            <form className="container">
                                <label className="sr-only">Role</label>
                                <select className="form-control" id="exampleSelect1" placeholder="Role">
                                    <option>Fleet Manager</option>
                                    <option>Work Shop Manage</option>
                                </select>
                                <label className="sr-only">Role</label>
                                <input type="text" className="form-control" placeholder="Type in company"/>
                                <label className="sr-only">Type</label>
                                <input type="text" className="form-control" placeholder="Type in foreman"/>
                                <label className="sr-only">Type1</label>
                                <input type="text" className="form-control"
                                       placeholder="Type in surname"/>
                                <label className="sr-only">Type2</label>
                                <input type="text" className="form-control" placeholder="Type in mail"/>
                                <button className="btn-block" type="submit">&nbsp;</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewUser;