import React from 'react';
const CarsTable = ({imagePath, make, model, capacity, consumption, emission, power, milage, company}) => (
    <tr>
        <td><img src={imagePath}/></td>
        <td>
            <h4>{make}</h4>
            <p className="cars-table-p">Model: {model}</p>
            <p className="cars-table-p">Capacity: {capacity}</p>
            <p className="cars-table-p">Consumption: {consumption}</p>
        </td>
        <td>
            <p className="cars-table-p">Emission: {emission}</p>
            <p className="cars-table-p">HP: {power}</p>
        </td>
        <td>{milage}</td>
        <td>{company}</td>
        <td>
            <ul>
                <li>
                    <img src={require('../../../assets/img/detls_icn.png')}/>
                    <span>Details</span>
                </li>
                <li>
                    <img src={require('../../../assets/img/trip_icn.png')}/>
                    <span>Trip</span>
                </li>
                <li><img src={require('../../../assets/img/servcs_icn.png')}/>
                    <span>Services</span>
                </li>
            </ul>
        </td>
    </tr>
);

export default CarsTable;