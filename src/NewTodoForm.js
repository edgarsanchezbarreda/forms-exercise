import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NewTodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleChange = evt => {
        setTask(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({ task, id: uuidv4() });
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>New Task</label>
            <input
                type='text'
                name='task'
                id='task'
                placeholder='todo'
                value={task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    );
};
