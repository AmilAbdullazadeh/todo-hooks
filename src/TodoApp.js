import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {

    const initialTodos = [
        {id: 1, task: "Test", completed: false},
        {id: 2, task: "Test 2", completed: false},
        {id: 3, task: "Test 3", completed: true},
    ]

    const [todos, setTodos] = useState(initialTodos)

    const addTodo = newTodo => {
        setTodos(
            [...todos, {id: 4, task: newTodo, completed: false}]
        )
    }

    const removeTodo = todoID => {
        const updateTodoList = todos.filter( todo => todo.id !== todoID )
        setTodos(updateTodoList)
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
            <Grid container justify="center" style={{ marginTop: "1rem" }} >
                <Grid item xs={11} md={8} lg={4} >
                    <TodoForm addTodo={addTodo} />
                    <TodoList removeTodo={removeTodo} todos={todos}/>
                </Grid>
            </Grid>
        </Paper>
    )
}


// - TodoApp
//     - TodoForm
//     - TodoList
//         - Todo