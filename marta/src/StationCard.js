import React from 'react';
import DirectionBound from './DirectionBound.js';
import Destination from './Destination.js'

const StationCard = (props) => {
    return (
        <div className="card">
                <div className="card-block card-contents">
                    <DirectionBound {...props}/>
                    <div> to </div>
                    <Destination {...props} />
                </div>
            </div>
    );
};

export default StationCard;