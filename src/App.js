import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Button from "./components/Button";
import Article from "./components/Article";

class App extends Component {
  buttonNames = [
    "Home",
    "football Articles",
    "coding Articles",
    "cooking Articles"
  ];
  render() {
    return (
      <div className="App">
        <img
          className="logo"
          src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png"
          alt="northcoders logo"
        />
        <Button className="buttons" buttonNames={this.buttonNames} />
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles/:_id" component={Article} />
        <Route exact path="/topics/:topic_slug/articles" component={Articles} />
      </div>
    );
  }
}

export default App;
