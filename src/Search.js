import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";

import "./Search.css";

export default function Search(props) {
  let [loaded, setLoaded] = useState(false);
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = `563492ad6f9170000100000169a8ec7c9139486e82ff6758cc02658c`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <div className="row p-5">
          <div className="col-12">
            <h1 className="text-center pb-4">What are you looking for?</h1>
          </div>
          <div className="search-holder justify-content-center rounded">
            <div className="row justify-content-center p-2">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  autoFocus={true}
                  onChange={handleKeywordChange}
                  placeholder="search your word (ex: watermelon, ride, spirit)"
                  className="form-control col-7"
                  id="search-input"
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-6">
          <Photos photos={photos} />
        </div>
        <div className="col-6">
          <Results results={results} />
        </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
