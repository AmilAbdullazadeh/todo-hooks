import React from 'react';
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";

export default function TodoList({ removeTodo, todos }) {

    return (
        <Paper>
            <List>
                {
                    todos.map((todo) => (
                        <>
                            <Todo
                                removedTodo={removeTodo}
                                task={todo.task}
                                id={todo.id}
                                completed={todo.completed} />
                            <Divider/>
                        </>
                    ))
                }
            </List>
        </Paper>
    )
}