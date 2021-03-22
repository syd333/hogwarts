import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import MainHog from './MainHog';

class App extends Component {

  state = {
    hogs: hogs,
    selectedHog: false
  }

  formatHogName = (name) => {
      let formattedName = name.split(" ").join("_").toLowerCase()
      let pigImage = require(`../hog-imgs/${formattedName}.jpg`)
      return pigImage
    } 

    handleClick = (hog) => {
      this.setState({selectedHog: hog})
    }

    handleSort = (e) => {
     switch(e.target.value){
       case 'greased':
          let filteredHogs = hogs.filter(hog => hog.greased === true)
          this.setState({hogs: filteredHogs})
        case 'name':
          let sortedNamesHogs = hogs.sort((a,b) => (a.name > b.name)? 1 : -1)
          this.setState({hogs: sortedNamesHogs})
        case 'weight':
        default:
     }
    }

    // passing the handleclick allll the way to hogtile
  render() {
    return (
      <div className="App">
        <Nav />
        <select onChange= {this.handleSort}>
          <option value="default">sort hog</option>
          <option value="greased">greased</option>
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
        {this.state.selectedHog ? <MainHog selectedHog={this.state.selectedHog} formatHogName={this.formatHogName}/> : null}
        <HogContainer hogs={this.state.hogs} formatHogName={this.formatHogName} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
