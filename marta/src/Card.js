import React from 'react';
import Countdown from './Countdown.js';
import Time from './Time.js';
import Destination from './Destination.js';


const Card = (props) => {
    return (
        <div className="card">
                <div className="card-block card-contents">
                    <Destination destination={props.station} />
                    <Time time={props.time}/>
                    <Countdown time={props.time} localTime={props.localTime} reload={props.reload}/>
                </div>
            </div>
    );
};



export default Card;