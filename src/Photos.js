import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-6 p-2" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer" alt="image of what you searched">
                  <img src={photo.src.tiny} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
