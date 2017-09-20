import React from 'react';

const DirectionBound = ({direction}) => {
    let format = {
        "S": "Southbound",
        "N": "Northbound",
        "E": "Eastbound",
        "W": "Westbound"
    }
    return (
        <div>
            <h3 className="class-title">{format[direction]}</h3>
        </div>
    );
};

export default DirectionBound;