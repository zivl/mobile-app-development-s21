import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  todoList: state.todos.list,
});

const mapDispatchToProps = {};

const Todo = ({ todoList, toggleTodo, addTodo, deleteTodo }) => (
  <View style={styles.todoList}>
    <FlatList
      data={todoList}
      keyExtractor={(todoItem) => todoItem.id}
      renderItem={({ item, index }) => (
        <View style={styles.todoItem}>
          <Text style={styles.todoItemText}>{`${index + 1}. ${item.text}`}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
  },
  todoItem: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
  },
  todoItemText: {
    fontSize: 18,
  },
});

Todo.propTypes = {
  todoList: PropTypes.array,
  toggleTodo: PropTypes.func,
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
