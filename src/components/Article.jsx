import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

class Article extends Component {
  state = {
    article: [],
    title: ""
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.article}</p>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        `https://nc-newsdanny.herokuapp.com/api/articles/${
          this.props.match.params._id
        }`
      )
      .then(({ data }) => {
        console.log(data.article, "<<<<<<");
        this.setState({
          article: data.article.body,
          title: data.article.title
        });
      });
  }
}

export default Article;
