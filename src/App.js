import './App.css';
import React, { Component } from 'react';
import Door from './componants/Door'

class App extends Component {

  constructor() {
    super()
    //function bindings
    this.eventHandler = this.eventHandler.bind(this);
    this.restart = this.restart.bind(this)
    this.nextDoor = this.nextDoor.bind(this)
    this.increaseCount = this.increaseCount.bind(this)
    this.state = 
    {
      //gets a random number between 0 and 4
      prizeLocation: Math.floor(Math.random() * 3) + 1,
      firstChoice: 0,
      doorToOpen1: 0,
      doorToOpen2: 0,
      doorToOpen3: 0,
      choiceCount: 0,
      status: ""
    }
  }
  
  //restarts the game by zeroing the states and getting a new random number for the winning door
  restart(){
    this.setState({
      //gets a random number between 0 and 4
      prizeLocation: Math.floor(Math.random() * 3) + 1,
      firstChoice: 0,
      doorToOpen1: 0,
      doorToOpen2: 0,
      doorToOpen3: 0,
      choiceCount: 0,
      status: ""
    })
  }
  
  
  //returns what door should be opened
  nextDoor(){
    const choice = this.state.firstChoice;
    const prizeloc = this.state.prizeLocation;
    //array representing the doors
    let arr = [1, 2, 3];
    //array representing the doors that should not be opened next
    let delarr = [choice, prizeloc]
    //fliters the arrays which returns the door that needs to be opened
    let remain = arr.filter(x => delarr.indexOf(x) === -1);
    //state is set
    this.setState({
      //the array only returns 1 number in the array
      doorToOpen1: remain[0]
    })
  }

  //increases the count
  increaseCount() {
    this.setState((prevState) => ({
       choiceCount: prevState.choiceCount + 1
    }))
  }
  
  eventHandler(event) {
    this.increaseCount()
    //if the user has played twice and the status has not been set, then lose is set
    if (this.state.choiceCount < 1) {
      //adds 1 to choice count
      //next door is called
      this.setState({
        firstChoice: parseInt(event.target.id),
        choiceCount: this.state.choiceCount + 1
      }, () => this.nextDoor())
      console.log("First choice: " + this.state.firstChoice);
    }else {
      //if the user clicks on the winning door the status is changed to win
      let loc = this.state.prizeLocation;
      if (parseInt(event.target.id) === loc) {
        this.setState({
          //opens the final door clicked on
          doorToOpen3: parseInt(event.target.id),
          status: "win"
        })
      }else {
        this.setState({
          //opens the final door clicked on
          doorToOpen3: parseInt(event.target.id),
          status: "lose"
        })
      }
    }
  }

  render(){
    return (
      <div>
        <div className="App">
          <Door status={this.state.status} result={this.state.status} open1={this.state.doorToOpen1} open2={this.state.doorToOpen2} open3={this.state.doorToOpen3} func={this.eventHandler} funcRestart={this.restart} prizeLoc={this.state.prizeLocation} fir={this.state.firstChoice} />
        </div>
      </div>
    );
  }
  
}

export default App;
