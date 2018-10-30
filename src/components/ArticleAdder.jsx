import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

class ArticleAdder extends Component {
  state = {
    text: "",
    title: ""
  };

  render() {
    // console.log(this.props.articleid, "oooooooooooo");
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>post an article of your own</h1>
        <input onChange={this.handleChange} type="text" />
        Post your thoughts here!
        <input onChange={this.handleTitleChange} type="text" />
        title
        <input type="submit" />
      </form>
    );
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    });
  };
  handleTitleChange = e => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
  };
  handleSubmit = e => {
    const newArticle = {
      title: this.state.title,
      body: this.state.text,
      created_by: "5bb4a6ef08b27e551018f83c"
    };
    // console.log(this.props.articleid, "dedfergerf");
    e.preventDefault();

    axios
      .post(
        `https://nc-newsdanny.herokuapp.com/api/topics/${
          this.props.topicslug
        }/articles`,
        newArticle
      )
      .then(addArticle => {
        console.log(addArticle, "@@@@@@@@@");
        this.setState({});
      });
  };
  componentDidUpdate() {}
}

export default ArticleAdder;
