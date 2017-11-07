import React from "react";

export const Select = props =>
  <div className="form-group container">
  <label htmlFor="numSearched">Number of results</label>
    <select className="form-control" value="5" id="numSearches"{...props}>
    <option value="1">1</option>
    <option value="5">5</option>
    <option value="10">10</option>
    </select>
  </div>;
