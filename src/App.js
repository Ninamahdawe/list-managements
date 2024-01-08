import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";
import { Typography } from '@mui/material';


function App() {
  const [tasks, setTasks] = useState(() => {
    const savedList = localStorage.getItem("tasks");
    return savedList ? JSON.parse(savedList) : [];
  }
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const checkTask = (id) => {
    console.log(id);
    setTasks(tasks.map(tasks => {
      if (tasks.id === id) {
        tasks.isCompleted = !tasks.isCompleted
      }
      return tasks;


    }))
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const addTask = (text) => {
    const newTask = {
      id: v4(),
      title: text,
      isCompleted: false,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };
  return (
    <div style={{ backgroundColor: "#DFF4F8" }}>

      <Typography variant="h4" sx={{ textAlign: 'center', color: '#057DC7', my: 2, border: '2px solid ', p: 1, }} >
        My Task List
      </Typography>
      <TodoForm addTask={addTask} />
      <TaskList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
