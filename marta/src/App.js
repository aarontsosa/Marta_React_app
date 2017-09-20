import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './Navigation.js';
import MartaDashboard from './MartaDashboard.js';
import RoutesResults from './RoutesResults.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: "FIVE POINTS STATION",
      direction: "S"
    };
  }
  render() {
    let martaDirection = ["North", "South", "East", "West"]
    let martaNorthSouth = ["North Springs", "Sandy Springs", "Dunwoody", "Buckhead", "Doraville", "Chamblee", "BrookHaven", "Lenox", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood", "East Point", "College Park", "Airport"]
    let martaEastWest = ["H.E.Holmes", "West Lake", "Bankhead", "Ashby", "Vine City", "Dome/GWCC/Philips/CNN", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood Candler Park", "East Lake", "Decatur", "Avondale", "Kensington", "Indian Creek"]
    return (
      <div className="App">
        <br/>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={({match}) => (<Navigation navarray={martaDirection} match={match}/>)} />
              <Route exact path="/routes" component={({match}) => (<RoutesResults  match={match} />)} />
              <Route path={`/:direction/:station`} component={(match) => (<MartaDashboard match={match}/>)} />
              <Route path="/:direction" component={({match}) => (<Navigation NSarray={martaNorthSouth} EWarray={martaEastWest} match={match}/>)} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  _update = (event) => {
    this.setState({
      direction: event.target.value,
    })
  }
}


export default App;
