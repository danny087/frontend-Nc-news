import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

const DeleteComment = props => {
  console.log(props.comment, "this");
  return (
    <button onClick={() => props.deleteComment(props.comment)}>
      Delete Comment
    </button>
  );
};

export default DeleteComment;
