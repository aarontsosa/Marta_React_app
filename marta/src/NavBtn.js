import React from 'react';
import { Link } from 'react-router-dom';

const NavBtn = ({match, name}) => {
    if(name === "North" || name === "South" || name === "East" || name === "West"){
        return (
            <tr>
                <td><Link to={`${match.url}${name}`}> <h3>{name}</h3> </Link> </td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td><Link to={`${match.url}/${name}`}> <h3>{name}</h3> </Link> </td>
            </tr>
        );
    }
    
};

export default NavBtn;