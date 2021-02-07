import React from 'react';
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";

export default function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    return (
        <Paper>
            {todos.length ?
                <List>
                    {
                        todos.map((todo, idx) => (
                            <>
                                <Todo
                                    editTodo={editTodo}
                                    toggleTodo={toggleTodo}
                                    removeTodo={removeTodo}
                                    {...todo}
                                    // task={todo.task}
                                    // key={todo.id}
                                    // completed={todo.completed}
                                    // id={todo.id}
                                />
                                {idx < todos.length - 1 && <Divider/>}
                            </>
                        ))
                    }
                </List>
                : null
            }
        </Paper>
    )
}