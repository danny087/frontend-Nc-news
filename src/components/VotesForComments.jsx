import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

class VotesForComments extends Component {
  state = {
    votes: 0
  };

  render() {
    return (
      <div>
        {console.log(this.props, "hhhhhhggggg")}
        {console.log(this.props.commentid, ":::::::::")}
        <button onClick={() => this.votechanger("up")} type="button">
          up
        </button>
        <p>{this.props.commentvote}</p>
        <button onClick={() => this.votechanger("down")} type="button">
          down
        </button>
      </div>
    );
  }
  votechanger(direction, commentid) {
    axios
      .patch(
        `https://nc-newsdanny.herokuapp.com/api/comments/${
          this.props.commentid
        }?vote=${direction}`
      )
      .then(comments => {
        console.log(comments, "hello");
        this.setState({
          votes: comments.data.commentCount.votes
        });
      });
  }
}

export default VotesForComments;
