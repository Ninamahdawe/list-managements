import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} />
      ))}
    </div>
  );
};

export default TaskList;
