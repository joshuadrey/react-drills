import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      kombat: ["Scorpion", "SubZero", "Liu Kang", "Sonia Blade", "Johnny Cage", "Kano", 'Reptile']
    };
  }





  
  render() {
    let kombatToDisplay = this.state.kombat.map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });

    return <div className="App">{kombatToDisplay}</div>;
  }
}

export default App;