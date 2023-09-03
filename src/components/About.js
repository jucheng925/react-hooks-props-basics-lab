import React from "react";
import Links from "./Links"

function About(props) {
  function checkBio() {
    if (!("bio" in props)) {
      return null
    }
    else if (props.bio === "") {
      return null
    }
    else return <p>{props.bio}</p>
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin ={props.links.linkedin}/>
    </div>
  );
}

export default About;
