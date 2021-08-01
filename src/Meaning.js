import React from "react";

import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
    <hr />
      <span>
        <strong>{props.meaning.partOfSpeech}:</strong>
      </span>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <span>
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
          </span>
        );
      })}
    </div>
  );
}
