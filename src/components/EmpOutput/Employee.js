import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Department: {props.dept}</p>
      <input
        type="text"
        placeholder="Department Name..."
        onChange={props.updateDept.bind(this, props.index)}
        value={props.dept}
      />
      <button onClick={props.deleteDept.bind(props.index)}>Remove</button>
      <hr />
    </div>
  );
};

export default Employee;
