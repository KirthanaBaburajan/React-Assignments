import React from "react";

const Edit = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Department Name..."
        onChange={props.updateDept.bind(this, props.index)}
      />
    </div>
  );
};

export default Edit;
