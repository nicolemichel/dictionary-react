import React from "react";

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
              <div className="col-2">
                <i className="far fa-play-circle"></i>
              </div>
              <div className="col">
                <p className="word-searched">{props.results.word}</p>
                <p className="pronunciation">/ˈwəndərfəl/</p>
              </div>
            </div>
            <hr />
            {props.results.meanings.map(function(meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
        <hr id="vertical" />
      </div>
    );
  } else {
    return null;
  }
}
