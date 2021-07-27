import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span>
        <strong>{props.meaning.partOfSpeech}:</strong>
      </span>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <span key={index} className="definition">
              {definition.definition}
              <br />
              <em className="example">{definition.example}</em>
          <hr />
          </span>
        );
      })}
    </div>
  );
}
