import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Modal,
  makeStyles,
  Button,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./Todo.css";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {

  const classes = useStyles() ;
  const [open,setOpen]= useState(false);
  const [input,setInput] = useState('');
  const handleOpen = () => {
    setOpen(true);
  };
  const updateTodo = () => {
    // update the todo with the new input text
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    },{merge:true})
    setOpen(false);
  }
  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
    > 
    <form>
    <div className={classes.paper}>
      <input placeholder={props.todo.todo} value={input} onChange={event =>setInput(event.target.value)}/>
      <Button type='submit' onClick={updateTodo}>Update Todo</Button>
    </div>
    </form>
    </Modal>
    <List>
      <ListItem>
      <ListItemText
          primary={props.todo.todo}
          secondary='Dummy Deadline ⏰ '
        />
      </ListItem>
      <button onClick={e => setOpen(true)}>Edit</button>
      <DeleteForeverIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      ></DeleteForeverIcon>
    </List>
    </>
  );
}

export default Todo;
