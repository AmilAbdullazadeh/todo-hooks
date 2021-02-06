import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
import uuid from 'uuid/v4';

export default function TodoApp() {
    const initialTodos = [
        {id: 1, task: 'Read a book', completed: true},
    ]
    const [todos, setTodos] = useState(initialTodos)

    const addTodo = newTask => {
        setTodos([...todos, {id: uuid(), task: newTask, completed: false}])
    }

    const removeTodo = (todoID) => {
        const updateTodo = todos.filter(todo => todo.id !== todoID)
        setTodos(updateTodo)
    }

    const toggleTodo = (todoID) => {
        const updateTodo = todos.map((todo) => todo.id === todoID ? {...todo, completed: !todo.completed} : todo)
        setTodos(updateTodo)
    }

    const editTodo = (todoID, newTask) => {
        const updateTodo = todos.map(todo => todo.id === todoID ? {...todo, task: newTask} : todo)
        setTodos(updateTodo)
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{height: "65px"}}>
                <Toolbar>
                    <Typography color="inherit">Todos with Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}


// - TodoApp
//     - TodoForm
//     - TodoList
//         - Todo