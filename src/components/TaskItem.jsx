import React from "react";
import { CardContent, Typography, Container, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TaskItem = ({ title, checkTask, id, isCompleted, deleteTask }) => {
  const completeTask = () => checkTask(id);
  const removeTask = () => deleteTask(id);
  const taskStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  return (
    <div>
      <Container maxWidth="sm">
        <Card
          variant="outlined"
          style={{ marginTop: 30, backgroundColor: "#E1F5FD" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h4"
              style={taskStyle}
            >
              <IconButton onClick={completeTask}>
                <AddTaskIcon style={{ color: "#08DC44" }} />
              </IconButton>
              {title}
              <IconButton style={{ float: "right" }} onClick={removeTask}>
                <DeleteOutlineIcon style={{ color: "#E7000F" }} />
              </IconButton>
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default TaskItem;
