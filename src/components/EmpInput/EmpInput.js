import React from "react";
import "./empInput.css";

const Input = (props) => {
  return (
    <div className="form-container">
      <fieldset className="form-content">
        <legend>
          <b>Employee Details</b>
        </legend>
        <form onSubmit={props.addEmp}>
          <input type="text" placeholder="Enter name" id="name" />
          <br />
          <input type="text" placeholder="Enter department" id="dept" />
          <br />
          <input type="submit" value="Add Employee" />
        </form>
      </fieldset>
    </div>
  );
};

export default Input;
