import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Button = props => {
  // console.log(props);
  return (
    <div className='buttons'>
      {props.buttonNames.map(buttons => {
        const topic = buttons.split(" ")[0];
        console.log(topic, "TOPIC");
        if (topic === "Home") {
          return (
            <div>
            <h1 className="maintitle">Northcoders News</h1>
           <Link to={"/"}>
              
              <button className="button" type="button" name={buttons}>
                {buttons}
              </button>
            </Link>
            </div>
          );
        } else {
          return (
            <Link to={`/topics/${topic}/articles`}>
              <button className="button" type="button" name={buttons}>
                {buttons}
              </button>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Button;
