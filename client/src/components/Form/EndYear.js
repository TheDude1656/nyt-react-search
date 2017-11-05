import React from "react";

export const EndYear = props =>
  <div className="form-group container">
  <label for="endYear">End Year (Optional)</label>
    <input className="form-control" id="endYearDate" type="text" {...props} />
  </div>;
