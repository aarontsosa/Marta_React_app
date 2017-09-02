import React, { Component } from 'react';
import Card from './Card.js';



const getMartaData = () => {
    return fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
      method: 'get',
    }).then(function(response) {
      return response.json()
    }).catch(function(err) {
      // Error :(
    });
}

class MartaDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      martaData: [],
      localTime: new Date(),
      emptyArry: 0
    };
  }

  componentWillMount() {

    this.martaDataGrabber = setInterval( () => {
      getMartaData().then((jsonData) => {
        // console.log(jsonData);\
        let new_data = []
        let emptySignal = [{DESTINATION: "No Trains Avaliable at this moment", NEXT_ARR:" "}]
        jsonData.map((data)=>{
          if(data.DIRECTION === this.props.direction && data.STATION === this.props.station){
            new_data.push(data)
          }
          return data
        })
        // cb(new_data);
        if(new_data.length > 0){
          if(new_data.length >= this.state.martaData.length || new_data[0].DIRECTION !== this.state.martaData[0].DIRECTION){
          this.setState({
          martaData: new_data,
          emptyArry: 0
        });
        }
        
      } else if (new_data.length === 0){
        let size = this.state.emptyArry + 1
        this.setState({
          emptyArry: size
        })
        if(this.state.emptyArry >= 2){
          this.setState({
            martaData: emptySignal
          })
        }
      }
      })
      this.setState({
        localTime: new Date()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.martaDataGrabber);
  }

  render() {
    let martaOutput = this.state.martaData.map((datum) => {
      // debugger;
        return (
          <Card station={datum.DESTINATION} time={datum.NEXT_ARR} localTime={this.state.localTime}/>
        )

      
    });
    // console.log(martaOutput);

    

    return (
      <div className="row">
        <div className="col-sm-6 col-md-12 col-lg-12 col-xs-6">
          {martaOutput}
        </div>
      </div>
    )
  }

}

export default MartaDashboard;
