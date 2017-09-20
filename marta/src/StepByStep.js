import React from 'react';
import StationCard from './StationCard';
import DestinationCard from './DestinationCard.js';
import Stops from './Stops';

const StepByStep = (props) => {
    return (
        <div>
            <StationCard {...props} />
            <Stops {...props} />
            <DestinationCard {...props} />
        </div>
    );
};

export default StepByStep;