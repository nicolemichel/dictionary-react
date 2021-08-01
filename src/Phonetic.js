import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <i className="far fa-play-circle"></i>
        </a>
        <span>{props.phonetic.text}</span>
      </div>
    );
}