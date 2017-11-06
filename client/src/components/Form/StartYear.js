import React from "react";

export const StartYear = props =>
  <div className="form-group container">
  <label htmlFor="startYear">Start Year (Optional)</label>
    <input className="form-control" id="startYearDate" type="text" {...props} />
  </div>;
