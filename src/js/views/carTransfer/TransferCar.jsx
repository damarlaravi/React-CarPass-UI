import React, {Component} from 'react';
import Header from "../../components/global/Header";
class TransferCar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-sm-5 new-user">
                            <h1>Transfer Car</h1>
                            <form className="form-group">
                                <label className="sr-only">Car ID From TOM Web Service</label>
                                <input type="txt" className="form-control" placeholder="Car ID From TOM Web Service"/>
                                <label className="sr-only">Company at Fleet Manager</label>
                                <input type="text" className="form-control" placeholder="Company at Fleet Manager"/>
                                <button className="btn-block transfer-car-btn" type="submit">&nbsp;</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransferCar;