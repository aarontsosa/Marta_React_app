import React from 'react';

const RouteResultTitle = ({startingDestination, finalDestination}) => {
    return (
        <div className="card">
            <div className="card-block">
                <div className="class-title">
                    <h1>{startingDestination} to {finalDestination}</h1>
                </div>
            </div>
        </div>
    );
};

export default RouteResultTitle;