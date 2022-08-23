import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Todo } from './Todo';

it('Should render without crashing', () => {
    render(<Todo />);
});

it('Should match snapshot', () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

it('Runs handleDelete function on click', () => {
    const removeTodoMock = jest.fn();
    const { getByText } = render(<Todo removeTodo={removeTodoMock} />);
    const removeButton = getByText('X');

    fireEvent.click(removeButton);
    expect(removeTodoMock).toHaveBeenCalled();
});
