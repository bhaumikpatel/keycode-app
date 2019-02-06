import React, { Component } from "react";
import "./App.css";
import KeyCode from "./Components/keycode";
import Table from "./Components/table";

class App extends Component {
  render() {
    return (
      <div className="container">
        <KeyCode />
        <br />
        <Table />
        <div className="text-center text-white p-3 m-b-3">
        you can find the code on{" "}
        <a href="https://github.com/bhaumikpatel/keycode-app" target="_blank" rel="noopener noreferrer">Github</a> fork
        and suggest edits.
        </div>
      </div>
    );
  }
}

export default App;
