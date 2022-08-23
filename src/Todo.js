import React from 'react';

export const Todo = ({ task, id = '1', removeTodo }) => {
    const handleDeleteTodo = () => removeTodo(id);

    return (
        <div className='Todo'>
            <li>{task}</li>
            <button onClick={handleDeleteTodo}>X</button>
        </div>
    );
};
