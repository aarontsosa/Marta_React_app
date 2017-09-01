import React, { Component } from 'react';


const getMartaData = (cb) => {
    fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
      method: 'get',
    }).then(function(response) {
      return response.json()
    }).then(function(jsonData) {
      // console.log(jsonData);
      cb(jsonData);
    }).catch(function(err) {
      // Error :(
    });
}

class MartaDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      martaData: [],
      trainData:{}
    };
  }

  componentWillMount() {
    this.martaDataGrabber = setInterval( () => {
      getMartaData((jsonData) => {
        this.setState({
          martaData: jsonData,
          trainData: {}
        });
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.martaDataGrabber);
  }

  render() {

    let martaOutput = this.state.martaData.map((datum) => {
      // debugger;
      if(datum.DESTINATION === "Airport" && datum.STATION === "MIDTOWN STATION"){
        let localTime = new Date().toLocaleTimeString()
        let localHour = parseInt(localTime.slice(0, 2))
        let localMin = parseInt(localTime.slice(3, 5))
        let localSec = parseInt(localTime.slice(6, 8))
        let martaTime = datum.NEXT_ARR
        let martaHour = parseInt(martaTime.slice(0, 2))
        let martaMin = parseInt(martaTime.slice(3, 5))
        let martaSec = parseInt(martaTime.slice(6, 8))
        let secDif = (martaSec-localSec)
        let minDif = martaMin-localMin
          if(secDif < 0){
            secDif += 60
          }
          if(minDif < 0){
            minDif += 60
          }
        let countdown = (minDif) + ":" + (secDif)
        console.log(localTime)
        console.log(datum)
        return (
                    <tbody>
                      <tr>
                        <th scope="row">{datum.STATION}</th>
                        <td>{datum.TRAIN_ID}</td>
                        <td>{datum.NEXT_ARR}</td>
                        <td>{countdown}</td>
                      </tr>
                    </tbody>)
      } 
      return

      
    });
    // console.log(martaOutput);

    return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Station</th>
              <th>Train ID</th>
              <th>Waiting Time</th>
              <th>Countdown</th>
            </tr>
          </thead>
          {martaOutput}
        </table>
    )
  }

  // _updateMartaData = (jsonData) => {
  //     this.setState({
  //       martaData: jsonData
  //     });
  // }
}

export default MartaDashboard;
