import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { AddItem } from '../AddItem/AddItem';
import { addItem, deleteItem, toggleItem, loadUserData } from './todoActions';
import ToggleVisibility from '../ToggleVisibility/ToggleVisibility';
import { FILTERS } from '../ToggleVisibility/toogleVisibilityReducer';

const mapStateToProps = ({ todos, filter }) => {
  let filteredList = [];
  if (filter === FILTERS.ALL) {
    filteredList = todos.list;
  } else if (filter === FILTERS.COMPLETED) {
    filteredList = todos.list.filter((item) => item.isDone);
  } else if (filter === FILTERS.UNCOMPLETED) {
    filteredList = todos.list.filter((item) => !item.isDone);
  }
  return {
    todoList: filteredList,
    userName: todos.user.name,
  };
};

const Todo = ({ userName, todoList, toggleTodo, addTodo, deleteTodo, loadUserData }) => {
  const swipeLeftButtons = (id) => [
    {
      text: 'Delete',
      onPress: () => deleteTodo(id),
      type: 'delete',
    },
  ];
  const swipeRightButtons = (item) => [
    {
      text: item.isDone ? 'Undo' : 'Done',
      onPress: () => toggleTodo(item.id),
      type: 'primary',
    },
  ];
  return (
    <View style={styles.todoList}>
      {userName ? (
        <View>
          <Text>{userName}</Text>
        </View>
      ) : (
        <Button title="Load Data" onPress={loadUserData} />
      )}
      <AddItem onSubmit={addTodo} />
      <ToggleVisibility />
      <FlatList
        data={todoList}
        keyExtractor={(todoItem) => todoItem.id}
        ListEmptyComponent={<Text>No Todo Items Found</Text>}
        renderItem={({ item }) => (
          <Swipeout
            autoClose
            right={swipeLeftButtons(item.id)}
            left={swipeRightButtons(item)}
            style={styles.swipeStyles}
          >
            <View style={styles.todoItem}>
              <Text
                style={StyleSheet.compose(styles.todoItemText, {
                  textDecorationLine: item.isDone ? 'line-through' : 'none',
                })}
              >
                {item.text}
              </Text>
            </View>
          </Swipeout>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
  },
  todoItem: {
    padding: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
  },
  todoItemText: {
    fontSize: 18,
  },
  swipeStyles: {
    backgroundColor: 'white',
  },
});

Todo.propTypes = {
  userName: PropTypes.string,
  todoList: PropTypes.array,
  toggleTodo: PropTypes.func,
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  loadUserData: PropTypes.func,
};

export default connect(mapStateToProps, {
  addTodo: addItem,
  deleteTodo: deleteItem,
  toggleTodo: toggleItem,
  loadUserData,
})(Todo);
