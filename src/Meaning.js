import React from "react";

import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span>
        <strong>{props.meaning.partOfSpeech}:</strong>
      </span>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div className="Meaning">
            <span key={index} className="definition">
              {definition.definition}
              <br />
              <em className="example">
                <strong>example:</strong> {definition.example}
              </em>
            </span>
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
