import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";
import PropTypes from "prop-types";

class Votes extends Component {
  state = {
    votes: 0
  };

  render() {
    return (
      <div>
        <button
          className="votebuttons"
          onClick={() => this.votechanger("up")}
          type="button"
        >
          up
        </button>
        <p>{this.props.votes + this.state.votes}</p>
        <button
          className="votebuttons"
          onClick={() => this.votechanger("down")}
          type="button"
        >
          down
        </button>
      </div>
    );
  }
  votechanger(direction, articleid) {
    axios
      .patch(
        `https://nc-newsdanny.herokuapp.com/api/articles/${
          this.props.articleid
        }?vote=${direction}`
      )
      .then(article => {
        this.setState({
          votes:
            direction === "up" ? this.state.votes + 1 : this.state.votes - 1
        });
      });
  }
}

Votes.propTypes = {
  articleid: PropTypes.Array,
  votes: PropTypes.Number
};

export default Votes;
