import React from "react";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-6 images">
            <div className="row p-1">
              <div className="col-6">
                <div className="card">
                  <img src="" alt="what you searched" className="rounded" />
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <img src="" alt="what you searched" className="rounded" />
                </div>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-6">
                <div className="card">
                  <img src="" alt="what you searched" className="rounded" />
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <img src="" alt="what you searched" className="rounded" />
                </div>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-6">
                <div className="card">
                  <img src="" alt="what you searched" className="rounded" />
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <img src="" alt="what you searched" className="rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 definition">
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
