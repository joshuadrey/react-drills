import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://wallpaperaccess.com/full/86289.jpg"} />
      </div>
    );
  }
}

export default App;
