import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
