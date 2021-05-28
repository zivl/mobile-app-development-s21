import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react-native';
import Todo from '../src/components/Todo/Todo';
import { store } from '../src/store';

describe('Todo Component Tests', () => {
  test('should render "no items found" message when there are no todos in list', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );
    expect(getByText('No Todo Items Found')).toBeDefined();
  });

  test('should render todo list when items are in list', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );
    const inputText = getByTestId('todo-input-text');
    const addButton = getByText('Add');
    const todoText = 'fix car';
    fireEvent.changeText(inputText, todoText);
    fireEvent.press(addButton);
    expect(getByText(todoText)).toBeDefined();
  });
});
