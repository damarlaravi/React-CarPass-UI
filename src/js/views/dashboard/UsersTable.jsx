import React, {Component} from 'react';
import UsersList from './UsersList';

class UsersTable extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data);
    }

    render() {
        //const {data} = this.props.data;
        console.log('In User Table ',this.props.data);
        return (
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
                    {this.props.data.map((user, i) =>
                        <UsersList key={i}
                                   {...user}/>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsersTable;