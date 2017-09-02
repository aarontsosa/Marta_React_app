import React, { Component } from 'react';

const Countdown = ({time, localTime}) => {
    if(time.length === 1){
      return <div></div>
    }
    let localTimeString = localTime.toLocaleTimeString()
    let localHour = parseInt(localTimeString.slice(0, 2))
    let localMin = parseInt(localTimeString.slice(3, 5))
    let localSec = parseInt(localTimeString.slice(6, 8))
    let martaTime = time
    let martaHour = parseInt(martaTime.slice(0, 2))
    let martaMin = parseInt(martaTime.slice(3, 5))
    let martaSec = 0
    let secDif = martaSec-localSec
    let minDif = martaMin-localMin
    let hourDif = martaHour-localHour
      if(hourDif > 0){
        minDif = (martaMin + (60 * hourDif)) - localMin
      }
      if(secDif <= 0 && minDif <= 0){
        return <h1 className="card-title">Boarding Now</h1>
      } else if(secDif < 0){
        secDif += 60
      } else if(minDif < 0){
        minDif += 60
      }
      if(secDif < 10){
          secDif = "0" + secDif
      }
    let countdown = (minDif) + ":" + (secDif)
    return <h1 className="card-title">{countdown}</h1>
}

export default Countdown