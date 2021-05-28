import { addItem, deleteItem, toggleItem } from '../src/components/Todo/todoActions';

describe('unit testing todo actions', () => {
  test('calling add item action populates todo item with id', () => {
    const actionResult = addItem('shopping for shabat');
    expect(actionResult.payload).toHaveProperty('id');
  });

  test('calling add item action populates todo item given text', () => {
    const todoText = 'shopping for shabat';
    const actionResult = addItem(todoText);
    expect(actionResult.payload).toHaveProperty('text', todoText);
  });

  test('calling add item action automatically sets todo item to uncompleted', () => {
    const actionResult = addItem('');
    expect(actionResult.payload).toHaveProperty('isDone', false);
  });

  test('calling delete item has id in payload', () => {
    const id = '345';
    const actionResult = deleteItem(id);
    expect(actionResult).toHaveProperty('payload', id);
  });

  test('calling toggle item has id in payload', () => {
    const id = '345';
    const actionResult = toggleItem(id);
    expect(actionResult).toHaveProperty('payload', id);
  });
});
