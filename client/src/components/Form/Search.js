import React from "react";

export const Search = props =>
  <div className="form-group container">
  <label for="searched">Search Articles</label>
    <input className="form-control" id="searchTerm" type="text" {...props} />
  </div>;
