import { addItem, deleteItem, toggleItem } from '../src/components/Todo/todoActions';
import { createNewStoreForTests } from '../src/store';

describe('todo actions and reducer integration tests', () => {
  let store;
  beforeEach(() => {
    store = createNewStoreForTests();
  });

  test('todo reducer should start with initial state', () => {
    const state = store.getState();
    expect(state.todos).toEqual({
      list: [],
      user: { name: '' },
    });
    // OR
    expect(state.todos.list).toEqual([]);
    // OR
    expect(state.todos).toEqual(expect.objectContaining({ list: [] }));
  });

  test('firing add item action should add todo item to todo list', () => {
    const todoText = 'fix car';
    const stateBefore = store.getState();
    expect(stateBefore.todos.list).toEqual([]);
    store.dispatch(addItem(todoText));
    const stateAfter = store.getState();
    expect(stateAfter.todos.list).toEqual(
      expect.arrayContaining([
        { text: todoText, id: expect.anything(), isDone: expect.anything() },
      ]),
    );
  });

  test('firing delete item action should delete the todo from the list', () => {
    const actionResult = store.dispatch(addItem('buy new car'));
    const stateBefore = store.getState();
    expect(stateBefore.todos.list).toEqual(
      expect.arrayContaining([
        { text: expect.anything(), id: expect.anything(), isDone: expect.anything() },
      ]),
    );
    store.dispatch(deleteItem(actionResult.payload.id));
    const stateAfter = store.getState();
    expect(stateAfter.todos.list).toEqual([]);
  });

  test('firing toggle item action should toggle the exact todo item in list', () => {
    const todoText1 = 'fix car';
    const todoText2 = 'buy a new car';
    const actionResult = store.dispatch(addItem(todoText1));
    store.dispatch(addItem(todoText2));
    expect(store.getState().todos.list).toHaveLength(2);
    const itemIdToRemove = actionResult.payload.id;
    store.dispatch(toggleItem(itemIdToRemove));
    const { todos } = store.getState();
    expect(todos.list).toEqual(
      expect.arrayContaining([{ text: todoText1, id: itemIdToRemove, isDone: true }]),
    );
  });
});
