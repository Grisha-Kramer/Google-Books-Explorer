import React, { Component } from "react"
import Books from "./pages/Books";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Books />
      </div>
    );
  }
}

export default App;
