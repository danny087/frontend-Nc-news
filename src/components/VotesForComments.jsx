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
        <button onClick={() => this.votechanger("up")} type="button">
          up
        </button>
        <p>{this.props.commentvote + this.state.votes}</p>
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
        this.setState({
          votes:
            direction === "up" ? this.state.votes + 1 : this.state.votes - 1
        });
      });
  }
}

export default VotesForComments;
