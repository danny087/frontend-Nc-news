import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Comments from "./Comments";

class Article extends Component {
  state = {
    article: [],
    title: "",
    id: ""
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.article}</p>
        <Comments articleid={this.state.id} />
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
          title: data.article.title,
          id: data.article._id
        });
      });
  }
}

export default Article;
