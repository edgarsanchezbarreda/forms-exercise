import React, { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { Todo } from './Todo';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };
    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div className='TodoList'>
            <h1 className='TodoList-header'>Todo App</h1>
            <NewTodoForm addTodo={addTodo} />
            <div className='TodoList-todos'>
                <ul>
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            removeTodo={removeTodo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};
