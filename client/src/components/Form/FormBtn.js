import React from "react";

export const FormBtn = props =>
  <button {...props} className="btn btn-dark customBtn shadowText">
    {props.children}
  </button>;
