import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.myBio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href = {props.myGithubLink}>{props.myGithubLink}</a>
      <a href= {props.myLinkedinLink}>{props.myLinkedinLink}</a>
    </div>
  );
}

export default About;
