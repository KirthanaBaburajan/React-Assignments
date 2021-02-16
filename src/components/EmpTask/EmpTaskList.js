import React from "react";
import "./empTask.css";

const Output = (props) => {
  return (
    <div>
      {props.tasks.map((task, index) => {
        return (
          <div key={index} className="task-list">
            <input
              type="checkbox"
              value={task}
              onClick={props.remove.bind(index)}
            />
            <label>{task}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Output;
