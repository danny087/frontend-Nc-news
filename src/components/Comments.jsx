import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";
import VotesForComments from "./VotesForComments";
import DeleteComment from "./DeleteComment";
import CommentAdder from "./CommentAdder";
import PropTypes from "prop-types";

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentAdder
          articleid={this.props.articleid}
          addComment={this.addComment}
        />
        {this.state.comments.map(comment => {
          return (
            <div className="comments">
              <p>{comment.body}</p>

              <DeleteComment
                comment={comment}
                deleteComment={this.deleteComment}
              />
              <VotesForComments
                commentid={comment._id}
                commentvote={comment.votes}
              />
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.props);
    axios
      .get(
        `https://nc-newsdanny.herokuapp.com/api/articles/${
          this.props.articleid
        }/comments`
      )
      .then(comment => {
        // console.log(comment.data.comments, "@@@@@@@@@@@@");
        this.setState({
          comments: comment.data.comments
        });
      });
  }
  deleteComment = commentToDelete => {
    // console.log(commentToDelete, "999999999999");
    axios
      .delete(
        `https://nc-newsdanny.herokuapp.com/api/comments/${commentToDelete._id}`
      )
      .then(deletedComment => {
        const comments = this.state.comments;
        const newCommentArray = comments.filter(comment => {
          return comment._id !== deletedComment.data.comment._id;
        });

        this.setState({
          comments: newCommentArray
        });
      });
  };
  addComment = newComment => {
    axios
      .post(
        `https://nc-newsdanny.herokuapp.com/api/articles/${
          this.props.articleid
        }/comments`,
        newComment
      )
      .then(({ data }) => {
        this.setState({
          comments: [data.comment, ...this.state.comments]
        });
      });
  };
}

Comments.propTypes = {
  articleid: PropTypes.Array
};

export default Comments;
