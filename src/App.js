import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Task 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Task 3",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Task 4",
      isCompleted: false,
    },
  ]);
  const addTask = (text) => {
    const newTask = {
      id: 5,
      title: text,
      isCompleted: false,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };
  return (
    <div>
      <TodoForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
