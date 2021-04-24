import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Todo from './src/components/Todo/Todo';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ToDo App - Redux Workshop</Text>
      </View>
      <View style={styles.container}>
        <Todo />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { marginTop: 30, fontSize: 20, fontWeight: 'bold' },
  container: {
    flex: 1,
  },
});
