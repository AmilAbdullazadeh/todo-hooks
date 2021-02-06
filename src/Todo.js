import React from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useTooglegleState from "./hooks/useToggleState";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "./EditTodoForm";

export default function Todo({id, task, completed, removeTodo, toggleTodo, editTodo}) {
    const [isEditing, toggle] = useTooglegleState(false)
    return (
        <ListItem>
            {
                isEditing
                    ? (<EditTodoForm
                        id={id}
                        task={task}
                        toggleTodo={toggle}
                        editTodo={editTodo}
                    />)
                    : (
                        <>
                            <Checkbox checked={completed} onClick={() => {
                                toggleTodo(id)
                            }}/>
                            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                                {task}
                                {/*<TodoItem  />*/}
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete">
                                    <DeleteIcon onClick={() => removeTodo(id)}/>
                                </IconButton>
                                <IconButton aria-label="Edit">
                                    <EditIcon onClick={toggle}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </>
                    )
            }
        </ListItem>
    )
}
