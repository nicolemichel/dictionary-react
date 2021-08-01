import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Search.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
 } else {
   load();
   return "Loading...";
 }
}
