import React from 'react';
import "./Door.css"

export default function ShowDoors( props ) {
  const { open1, open2, open3, func , prizeLoc, funcRestart, status } = props;

  //Doors array with their ID
  let doors = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    }
  ]

  //doors is mapped
  let door = doors.map( (door, key) => 
    {
      //Prints each door, depending on whether it is the prize door or not, the corresponding class is applied
      //--------------------------------------------------------DOOR 1
      if (door.id === open1 && door.id === prizeLoc){
        return (<div key={key} className="door">
                  <div id={door.id} className="door prize-bg"></div>
                </div>)
      }else if(door.id === open1){
        return (<div key={key} className="door">
                  <div id={door.id} className="door goat-bg"></div>
                </div>)
      }
      //Prints each door, depending on whether it is the prize door or not, the corresponding class is applied
      //--------------------------------------------------------DOOR 2
      if (door.id === open2 && door.id === prizeLoc){
        return (<div key={key} className="door">
                  <div id={door.id} className="door prize-bg"></div>
                </div>)
      }else if(door.id === open2){
        return (<div key={key} className="door">
                  <div id={door.id} className="door goat-bg"></div>
                </div>)
      }
      //Prints each door, depending on whether it is the prize door or not, the corresponding class is applied
      //--------------------------------------------------------DOOR 3
      if (door.id === open3 && door.id === prizeLoc){
        return (<div key={key} className="door">
                  <div id={door.id} className="door prize-bg"></div>
                </div>)
      }else if(door.id === open3){
        return (<div key={key} className="door">
                  <div id={door.id} className="door goat-bg"></div>
                </div>)
      //if the status has been set, the closed doors will no longer trigger the event if clicked
      }else if (status === "win" || status === "lose"){
        return <div key={key}><div id={door.id} className='door door-bg-closed'></div></div>
      //else if the game is still on, the doors can be clicked
      }else{
        return <div key={key}><div id={door.id} className='door door-bg-closed' onClick={func}></div></div>
      }
      
    }
    
  )
  //returns the corresponding result from props
  function getResult() {
    if (status === "win") {
      return <h2>YOU WIN!</h2>
    } else if (status === "lose") {
      return <h2>YOU LOSE!</h2>
    }else {
      return <h2 className="invis">John Cena</h2>
    }
  }
  
  //style for the background
  const bg = {
    display: "flex",
    padding: "0px",
    margin: "0px"
  }

  return (
    <div>
      <h1>Monty Hall Game</h1>
      <div style={bg}>
        {door}
      </div>
      <button onClick={funcRestart}>Restart</button><br></br>
      {getResult()}
      <hr></hr>
      <p>
        The Monty Hall Problem gets its name from the TV game show, Let's Make A Deal, hosted by Monty Hall. The scenario is you are given the opportunity to select one closed door of three, behind one of which there is a prize. The other two doors hide “goats” (or some other such “non-prize”), or nothing at all.
      </p>
      <hr></hr>
      <p><span>Created by: </span><a href="https://github.com/layne74" target="blank">Layne Hutchings</a></p>
    </div>
  )
}