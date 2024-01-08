import React from "react";
import { FormControl, TextField, Button } from "@mui/material";
import { Container, margin } from "@mui/system";

const TodoForm = () => {
  return (
    <Container maxWidth="sm">
      <form>
        <FormControl fullWidth={true}>
          <TextField id="filled-basic" label="Task 1 " variant="filled" />
          <Button
            variant="contained"
            color="primary"
            type="add"
            style={{ marginTop: 5 }}
          >
            Add Task
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
