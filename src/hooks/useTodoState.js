import {useState} from "react";
import uuid from "uuid/v4";
import useLocalStorageState from "./useLocalStorageState";


export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos)

    return {
        todos,

        addTodo: newTodo => {
            setTodos(
                [...todos, {id: uuid(), task: newTodo, completed: false}]
            )
        },

        removeTodo: todoID => {
            const updateTodoList = todos.filter(todo => todo.id !== todoID)
            setTodos(updateTodoList)
        },

        toggleTodo: todoID => {
            const updateTodoList = todos.map(todo => todo.id === todoID ? {...todo, completed: !todo.completed} : todo)
            setTodos(updateTodoList)
        },

        editTodo: (todoID, newTask) => {
            const updateTodoList = todos.map(todo => todo.id === todoID ? {...todo, task: newTask} : todo)
            setTodos(updateTodoList)
        }
    }
}