import React from "react";
import Employee from "./Employee";
import "./employee.css";

const Employees = (props) => {
  return (
    <div className="Emp-list">
      {props.employees.map((emp, index) => {
        return (
          <Employee
            name={emp.name}
            dept={emp.dept}
            key={index}
            updateDept={props.updateDept}
            deleteDept={props.deleteDept}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Employees;
