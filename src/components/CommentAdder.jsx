import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

class CommentAdder extends Component {
  state = {
    text: ""
  };

  render() {
    // console.log(this.props.articleid, "oooooooooooo");
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" />
        <input type="submit" />
      </form>
    );
  }

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      text: e.target.value
    });
  };
  handleSubmit = e => {
    const newComment = {
      body: this.state.text,
      created_by: "5bb4a6ef08b27e551018f83c"
    };
    // console.log(this.props.articleid, "dedfergerf");
    e.preventDefault();

    axios
      .post(
        `https://nc-newsdanny.herokuapp.com/api/articles/${
          this.props.articleid
        }/comments`,
        newComment
      )
      .then(addComment => {
        this.setState({});
      });
  };
  componentDidUpdate() {}
}

export default CommentAdder;
