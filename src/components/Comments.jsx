import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

class Comments extends Component {
  state = {};

  render() {
    console.log(this.props.articleid, "oooooooooooo");
    return <h1>helloooo</h1>;
  }
  componentDidMount() {
    axios
      .get(
        `https://nc-newsdanny.herokuapp.com/api/articles/${
          this.props.articleid
        }/comments`
      )
      .then(comment => {
        console.log(comment, "@@@@@@@@@@@@");
      });
  }
}

export default Comments;
