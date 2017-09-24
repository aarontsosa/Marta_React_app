import React from 'react';
import Countdown from './Countdown.js';
import Time from './Time.js';
import Destination from './Destination.js';


const Card = (props) => {
    return (
        <div className="card">
                <div className="card-block">
                    <Destination destination={props.station} />
                    <Time time={props.time}/>
                    <Countdown time={props.time} localTime={props.localTime} />
                </div>
            </div>
    );
};



export default Card;