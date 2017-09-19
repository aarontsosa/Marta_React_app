import React from 'react';
import { Link } from 'react-router-dom';

const NavBtn = ({match, name}) => {
    if(name === "North" || name === "South" || name === "East" || name === "West"){
        return (
            <tr>
                <td><Link to={`${match.url}${name}`}> {name} </Link> </td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td><Link to={`${match.url}/${name}`}> {name} </Link> </td>
            </tr>
        );
    }
    
};

export default NavBtn;