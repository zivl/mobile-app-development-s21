import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Todo from '../src/components/Todo/Todo';
import { store } from '../src/store';
import nock from 'nock';

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

  test('should the same screen snapshot when adding new todo in list', () => {
    const { getByText, getByTestId, toJSON } = render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );
    const inputText = getByTestId('todo-input-text');
    const addButton = getByText('Add');
    const todoText = 'fix car';
    fireEvent.changeText(inputText, todoText);
    fireEvent.press(addButton);
    expect(toJSON()).toMatchSnapshot();
  });

  test('should return user detail and present on title', async () => {
    const expectedUsername = 'ziv';
    //https://api.soundcloud.com/me?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE
    // baseUrl / path / query params
    nock('https://api.soundcloud.com')
      .get(/me(.*)/)
      .reply(200, {
        user: {
          name: expectedUsername,
        },
      });
    const { getByText, getByTestId, toJSON } = render(
      <Provider store={store}>
        <Todo />
      </Provider>,
    );

    const loadButton = getByText('Load Data');
    fireEvent.press(loadButton);
    await waitFor(() => expect(getByTestId('username-text')).toBeDefined());
    const textComponent = getByTestId('username-text');
    expect(textComponent.children[0]).toEqual(expectedUsername);
    expect(toJSON()).toMatchSnapshot();
  });
});
