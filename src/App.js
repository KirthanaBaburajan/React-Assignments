import React, { Component } from "react";
import Employees from "./components/EmpOutput/Employees";
import InputEmp from "./components/EmpInput/EmpInput";
import InputTask from "./components/EmpTask/EmpTaskInput";
import "./App.css";

class App extends Component {
  state = {
    employee: [
      {
        name: "TANU",
        dept: "Sales",
      },
      {
        name: "KANU",
        dept: "Marketing",
      },
    ],
    task: ["Check Sales Report"],
  };

  addEmpHandler = (event) => {
    const name = event.target.name.value.toUpperCase();
    const dept = event.target.dept.value;

    if (name.length <= 0 || dept.length <= 0) {
      alert("Please enter values");
      return;
    }

    const oldEmp = this.state.employee;
    let newEmp = [...oldEmp];

    newEmp.splice(newEmp.length, 0, { name, dept });

    this.setState({ employee: newEmp });
    event.preventDefault();
  };

  updateDeptHandler = (index, event) => {
    let dept_value = event.target.value;
    const oldEmp = this.state.employee;
    let newEmp = [...oldEmp];

    let emp = {
      ...newEmp[index],
    };
    emp.dept = dept_value;
    newEmp[index] = emp;

    this.setState({ employee: newEmp });
  };

  removeHandler = (index) => {
    const oldEmp = this.state.employee;
    let newEmp = [...oldEmp];

    newEmp.splice(index, 1);

    this.setState({ employee: newEmp });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Employee</p>
        </header>
        <div className="App-section">
          <div>
            <Employees
              employees={this.state.employee}
              updateDept={this.updateDeptHandler}
              deleteDept={this.removeHandler}
            />
          </div>
          <div>
            <InputEmp addEmp={this.addEmpHandler} />
          </div>
          <div>
            <InputTask />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
