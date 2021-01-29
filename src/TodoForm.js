import React from 'react';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";

export default function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useInputState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        reset();
    }

    return (
        <Paper
            style={{
                margin: "1rem 0",
                padding: "0 1rem"
            }}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    labels="Add New Todo"
                    fullWidth
                    value={value}
                    onChange={handleChange}/>
            </form>
        </Paper>
    )
}