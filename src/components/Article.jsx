import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Comments from "./Comments";
import CommentAdder from "./CommentAdder";
import DeleteComment from "./DeleteComment";

class Article extends Component {
  state = {
    article: {},
    errStatus: null
  };

  componentDidMount() {
    axios
      .get(
        `https://nc-newsdanny.herokuapp.com/api/articles/${
          this.props.match.params._id
        }`
      )
      .then(({ data }) => {
        this.setState({
          article: data.article
        });
      })
      .catch(err => {
        this.setState({ errStatus: err });
      });
  }
  render() {
    if (this.state.errStatus)
      return (
        <Redirect
          to={{
            pathname: "/NotFound",
            state: {
              message: "There is no such article. "
            }
          }}
        />
      );
    return (
      <div>
        <div className="articles">
          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.body}</p>
        </div>
        <div>
          <Comments articleid={this.props.match.params._id} />
        </div>
      </div>
    );
  }
}

export default Article;
