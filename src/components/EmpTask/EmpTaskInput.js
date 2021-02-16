import React, { Component } from "react";
import TaskList from "./EmpTaskList";

class EmpTaskInput extends Component {
  state = {
    task: ["Check Sales Report"],
  };

  addTaskHandler = (event) => {
    let value = event.target.value;
    if (value.length > 0) {
      let task = [...this.state.task];
      task.push(value);
      this.setState({ task: task });
    }
  };

  removeTaskHandler = (index) => {
    let newTask = [...this.state.task];
    newTask.splice(index, 1);
    this.setState({ task: newTask });
  };

  render() {
    return (
      <div>
        <h2>TODOS</h2>
        <input type="text" id="task-container" onBlur={this.addTaskHandler} />
        <TaskList tasks={this.state.task} remove={this.removeTaskHandler} />
      </div>
    );
  }
}

export default EmpTaskInput;
