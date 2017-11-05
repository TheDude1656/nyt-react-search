import React from "react";

export const Select = props =>
  <div className="form-group container">
  <label for="numSearched">Number of results</label>
    <select className="form-control" id="numSearches"{...props}>
    <option value="1">1</option>
    <option value="5" selected>5</option>
    <option value="10">10</option>
    </select>
  </div>;
