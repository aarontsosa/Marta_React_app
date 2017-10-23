import React, { Component } from 'react';
import Card from './Card.js';
import axios from 'axios';
import Loading from 'react-loading-animation';

const martaURL = 'http://localhost:7000/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1'

const getMartaData = () => {
  return axios.get(martaURL)
      .then(function(response) {
      
      return response.data
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
      emptyArry: 0,
      loading: 0,
      doneLoading: false
    };
  }

  componentWillMount() {
    this.martaDataGrabber = setInterval(() => { 
        if (this.state.loading <= 2) {
          getMartaData().then((jsonData) => {
            // console.log(jsonData);\
            let new_data = []
            let emptySignal = [{ DESTINATION: "No Trains Avaliable at this moment", NEXT_ARR: " " }]
            jsonData.map((data) => {
              if (data.DIRECTION === this.props.match.match.params.direction[0] && data.STATION === (((this.props.match.match.params.station).toUpperCase()) + " STATION")) {
                new_data.push(data)
              }
              return data
            })
            if (new_data.length > 0) {
              if (new_data.length >= this.state.martaData.length || new_data[0].DIRECTION !== this.state.martaData[0].DIRECTION) {
                let new_loading = this.state.loading + 1
                this.setState({
                  martaData: new_data,
                  emptyArry: 0,
                  loading: new_loading,
                  doneLoading: true
                });
              }
        
            } else if (new_data.length === 0) {
              let size = this.state.emptyArry + 1
              this.setState({
                emptyArry: size
              })
              if (this.state.emptyArry >= 3) {
                this.setState({
                  martaData: emptySignal,
                  loading: 0,
                  doneLoading: true
                })
              }
            }
          })
        }  
      this.setState({
        localTime: new Date()
      })
      }, 1000)
  }
    

  componentWillUnmount() {
    clearInterval(this.martaDataGrabber);
  }


  render() {
    if (this.state.doneLoading === false) {
          return <Loading />
        }
    let martaOutput = this.state.martaData.map((datum) => {
      // debugger;
        return (
          <div className="card-container">
            <Card station={datum.DESTINATION} time={datum.NEXT_ARR} localTime={this.state.localTime} reload={this._reload}/>
            <br />
          </div>
        )
    });
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
          {martaOutput}
        </div>
      </div>
    )
  }

  _reload = () => {
    this.setState({
      loading: 0
    })
  }

}

export default MartaDashboard;
