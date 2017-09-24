import React from 'react';
import NavBtn from './NavBtn.js'
const Navigation = ({match, navarray, NSarray, EWarray}) => {
    if(match.params.direction === "North" || match.params.direction === "South"){
        var Nav = NSarray.map((data) => {
        return (
            <NavBtn name={data} match={match}/>
        )
    })
    } else if(match.params.direction === "East" || match.params.direction === "West"){
         Nav = EWarray.map((data) => {
            return (
                <NavBtn name={data} match={match}/>
            )
        })
    } else {
        Nav = navarray.map((data) => {
            return (
                <NavBtn name={data} match={match}/>
            )
        })
    }
    return (
        <div>
            <table className="table">
              <tbody>
                {Nav}
              </tbody>
            </table>
        </div>
    );
};

export default Navigation;