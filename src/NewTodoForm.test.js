import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NewTodoForm } from './NewTodoForm';
import { add } from 'nodemon/lib/rules';

it('Renders without crashing', () => {
    render(<NewTodoForm />);
});

it('Matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it('Runs addTodo function', () => {
    const addTodoMock = jest.fn();
    const { getByText } = render(<NewTodoForm addTodo={addTodoMock} />);
    const addButton = getByText('Add Todo');
    fireEvent.click(addButton);
    expect(addTodoMock).toHaveBeenCalled();
});
