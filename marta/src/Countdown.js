import React from 'react';

const Countdown = ({time, localTime}) => {
    if(time.length === 1){
      return <div></div>
    }
    let localTimeString = localTime.toLocaleTimeString()
    if(localTimeString.length === 10){
      localTimeString = "0" + localTimeString
    }
    let localHour = parseInt(localTimeString.slice(0, 2), 10)
    let localMin = parseInt(localTimeString.slice(3, 5), 10)
    let localSec = parseInt(localTimeString.slice(6, 8), 10)
    let martaTime = time
    let martaHour = parseInt(martaTime.slice(0, 2), 10)
    let martaMin = parseInt(martaTime.slice(3, 5), 10)
    let martaSec = 0
    let secDif = martaSec-localSec
    let minDif = martaMin-localMin
    let hourDif = martaHour-localHour
      if(hourDif > 0){
        minDif = (martaMin + (60 * hourDif)) - localMin
      }
      if (secDif <= 0 && minDif <= 0) {
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