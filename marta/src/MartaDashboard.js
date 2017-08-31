import React, { Component } from 'react'

class MartaDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            martaData: []
        }
        this.componentWillMount = this.componentWillMount.bind(this)
    }
    componentWillMount(){
        fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1', {
            method: 'get',
        }).then(function(response) {
            return response.json()
        }).then(function(jsonData) {
            this._updateMartaData(jsonData)
        }).catch(function(err) {
            // Error :(
        });
    }
    render(){
        let martaOutput = this.state.martaData.map((data) => <p>(data)</p>)
        return (
            <div>
                <p> Marta: It's Smarta (but not really) </p>
                <div>
                    {martaOutput}
                </div>
            </div>
        )
    }
    _updateMartaData = (jsonData) => {
        this.setState({
            martaData: jsonData
        })
    }
}

export default MartaDashboard