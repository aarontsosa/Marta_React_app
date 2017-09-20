import React from 'react';
import StepByStep from './StepByStep.js';
import RouteResultTitle from './RouteResultTitle.js'

const RoutesResults = () => {
    return (
        <div>
            <RouteResultTitle startingDestination="Midtown" finalDestination="Airport"/>
            <br />
            <StepByStep direction="S" destination="Airport"  num="5"/>
        </div>
    );
};

export default RoutesResults;