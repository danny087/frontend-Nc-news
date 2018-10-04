import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Button = props => {
  console.log(props);
  return (
    <div>
      {props.buttonNames.map(buttons => {
        const topic = buttons.split(" ")[0];
        return (
          <Link to={`/topics/${topic}/articles`}>
            <button type="button" name={buttons}>
              {buttons}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Button;
