import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <div className="row p-5">
        <div className="col-12">
          <h2 className="text-center">What are you looking for?</h2>
        </div>
        <div className="search-holder justify-content-center rounded">
          <div className="row justify-content-center p-2">
            <form onSubmit={search}>
              <input
                type="search"
                autoFocus={true}
                onChange={handleKeywordChange}
                placeholder="search your word"
                className="form-control col-7"
                id="search-input"
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>
    <Results results={results}/>
    </div>
  );
}
