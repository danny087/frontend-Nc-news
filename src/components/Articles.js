import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Button from "./Button";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div>
        <h1>Northcoders News</h1>

        {this.state.articles.map(article => {
          // console.log(article, "<<<<<<<<<<<<<<");

          return (
            <Link to={`/articles/${article._id}`}>
              <div className="article">
                <h1>{article.title}</h1>
                <p>{article.body}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.match.params.topic_slug, "jjjjjjj");
    if (this.props.match.params.topic_slug) {
      axios
        .get(
          `https://nc-newsdanny.herokuapp.com/api/topics/${
            this.props.match.params.topic_slug
          }/articles`
        )
        .then(article => {
          console.log(article.data.article, "::::::::::::::xxx");
          this.setState({
            articles: article.data.article
          });
        });
    } else {
      axios
        .get("https://nc-newsdanny.herokuapp.com/api/articles")
        .then(({ data }) => {
          // console.log(data.articles);

          this.setState({
            articles: data.articles
          });
        });
    }
  }
  componentDidUpdate(previousProps) {
    console.log(this.props.match.params.topic_slug, "jjjjjjj");
    if (previousProps !== this.props) {
      if (this.props.match.params.topic_slug) {
        axios
          .get(
            `https://nc-newsdanny.herokuapp.com/api/topics/${
              this.props.match.params.topic_slug
            }/articles`
          )
          .then(article => {
            console.log(article.data.article, "::::::::::::::xxx");
            this.setState({
              articles: article.data.article
            });
          });
      } else {
        axios
          .get("https://nc-newsdanny.herokuapp.com/api/articles")
          .then(({ data }) => {
            // console.log(data.articles);

            this.setState({
              articles: data.articles
            });
          });
      }
    }
  }
}

export default Articles;
