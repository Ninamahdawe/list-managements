import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, checkTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          checkTask={checkTask}
          id={task.id}
          isCompleted={task.isCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
