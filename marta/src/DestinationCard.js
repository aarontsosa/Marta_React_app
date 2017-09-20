import React from 'react';
import Destination from './Destination.js'

const DestinationCard = ({destination}) => {
    return (
        <div className="card">
                <div className="card-block">
                    <Destination destination="Destination:" />
                    <Destination destination={destination} />
                </div>
            </div>
    );
};

export default DestinationCard;