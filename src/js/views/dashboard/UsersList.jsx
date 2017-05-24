import React from 'react';
import PropTypes from 'prop-types'
const UsersList = ({foreName, sureName, dateOfRegistration, role, userName, password, mail, onClick}) => (
    <tr>
        <td>
            {foreName}
        </td>
        <td>
            {sureName}
        </td>
        <td>
            {dateOfRegistration}
        </td>
        <td>
            {role}
        </td>
        <td>
            {userName}
        </td>
        <td>
            {password}
        </td>
        <td>
            {mail}
        </td>
        <td>
                {/*<i className="fa fa-trash" aria-hidden="true"/>*/}
                <img src={require('../../../assets/img/del_btn.png')} onClick={onClick}/>
        </td>
    </tr>
);
UsersList.propTypes = {
    onClick: PropTypes.func.isRequired
};
export default UsersList