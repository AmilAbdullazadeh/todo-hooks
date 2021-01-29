import React from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function Todo({task, id, completed, removedTodo}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
                {/*<TodoItem  />*/}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete"
                    onClick={() => removedTodo(id)}
                >
                    <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="Edit">
                    <EditIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
