import React, {Component} from 'react';
import Header from "../../components/global/Header";

class CarRegister extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-sm-5 new-user">
                            <h1>Register Car</h1>
                            <form>
                                <label className="sr-only">Car ID From TOMTOM Web Service</label>
                                <input type="text" id="inputEmail" className="form-control"
                                       placeholder="Car ID From TOMTOM Web Service"/>
                                <label className="sr-only">Company at Fleet Manager</label>
                                <input type="text" id="inputPassword" className="form-control"
                                       placeholder="Company at Fleet Manager"/>

                                <button className="btn-block registe-car-btn" type="submit">&nbsp;</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarRegister;