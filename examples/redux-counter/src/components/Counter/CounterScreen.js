import React from 'react';
import { connect } from 'react-redux';
import { func, number, bool, string } from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { handleIncrement, handleDecrement } from './counterActions';
import { logoutUser } from '../User/userActions';

function mapStateToProps(state) {
  console.log(state);
  return {
    counter: state.counter.count,
    isError: state.counter.showError,
    name: state.user.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(handleIncrement()),
    decrement: () => dispatch(handleDecrement()),
    logout: (name) => dispatch(logoutUser(name)),
  };
}

function CounterScreen({ counter, increment, decrement, isError, name, logout }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titles}>
        {!!name && <Text>{`Welcome ${name}`}</Text>}
        <Text style={styles.counter}>Total Count:</Text>
        <Text style={styles.counter}>{counter}</Text>
        {isError && <Text style={styles.error}>Cannot decrement below zero</Text>}
      </View>
      <View style={styles.controllers}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Logout" onPress={() => logout(name)} />
      </View>
    </View>
  );
}

CounterScreen.propTypes = {
  name: string,
  increment: func,
  decrement: func,
  logout: func,
  counter: number,
  isError: bool,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titles: {
    alignItems: 'center',
  },
  counter: {
    fontSize: 30,
  },
  controllers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  error: {
    color: 'red',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
