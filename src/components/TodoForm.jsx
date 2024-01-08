import React, { useState } from "react";
import { FormControl, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            id="filled-basic"
            label="My To-do "
            variant="filled"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            required={true}
            style={{ marginTop: 5 }}
            type="submit"
          >
            AddTask
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
