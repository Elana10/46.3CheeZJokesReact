import React, { Component } from "react";
import JokeListRefactor from "../JokeListRefactor";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeListRefactor />
      </div>
    );
  }
}

export default App;
