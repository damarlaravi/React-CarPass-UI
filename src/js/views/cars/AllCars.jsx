import React, {Component} from 'react';
import Header from "../../components/global/Header";
import CarsTable from './CarsTable';

class AllCars extends Component {
    constructor() {
        super();
        this.state = {
            allCars: []
        };

        this.getAllCars();
    }

    getAllCars() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:5000/getAllCars', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', (data) => {
            if (xhr.status === 200) {
                //this.state.allUsers = data.currentTarget.response;
                this.setState({allCars: data.currentTarget.response});
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

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="col-sm-12">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Care Model</th>
                                <th/>
                                <th/>
                                <th>Milage</th>
                                <th>Company</th>
                                <th>&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.allCars.length > 0 && this.state.allCars.map((car, i) =>
                                <CarsTable key={i}
                                           {...car}/>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllCars;