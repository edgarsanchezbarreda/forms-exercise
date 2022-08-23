import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';
import { Todo } from './Todo';

const addTodo = (todoList, task = 'feed the dogs') => {
    const taskInput = todoList.getByLabelText('New Task');
    fireEvent.change(taskInput, { target: { value: task } });
    const submitButton = todoList.getByText('Add Todo');
    fireEvent.click(submitButton);
};

it('Should render without crashing', () => {
    render(<TodoList />);
});

it('Match snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('Can add a todo', () => {
    const todos = render(<TodoList />);
    addTodo(todos);

    expect(todos.getByLabelText('New Task')).toBeInTheDocument();
    expect(todos.getByLabelText('New Task')).toHaveValue('');
    expect(todos.getByText('Add Todo')).toBeInTheDocument();

    const addedTodo = todos.getByText('feed the dogs');
    expect(addedTodo).toBeInTheDocument();
});

it('Can delete a todo', () => {
    const todos = render(<TodoList />);
    addTodo(todos);

    const removeButton = todos.getByText('X');
    fireEvent.click(removeButton);

    const addedTodo = todos.queryByText('feed the dogs');
    expect(addedTodo).not.toBeInTheDocument();
});
