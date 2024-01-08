import React from "react";
import { CardContent, Typography, Container, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TaskItem = ({ title }) => {
  return (
    <Container maxWidth="sm">
      <Card
        variant="outlined"
        style={{ marginTop: 30, backgroundColor: "#E1F5FD" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            <IconButton>
              <AddTaskIcon style={{ color: "#08DC44" }} />
            </IconButton>
            {title}
            <IconButton style={{ float: "right" }}>
              <DeleteOutlineIcon style={{ color: "#E7000F" }} />
            </IconButton>
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TaskItem;
