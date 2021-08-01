import React from "react";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col definition">
            <div className="row">
              <div className="col">
                <h2 className="word-searched">{props.results.word}</h2>
                {props.results.phonetics.map(function(phonetic, index) {
                  return (
                    <div key={index}>
                      <Phonetic phonetic={phonetic} />
                    </div>
                  );
                })}
              </div>
            </div>
            {props.results.meanings.map(function(meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
