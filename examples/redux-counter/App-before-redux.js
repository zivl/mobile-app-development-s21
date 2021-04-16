import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showError: false,
    };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
    if (this.state.showError) {
      this.setState({ showError: false });
    }
  };

  handleDecrement = () => {
    if (this.state.counter === 0) {
      this.setState({ showError: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.titles}>
          <Text style={styles.counter}>Total Count:</Text>
          <Text style={styles.counter}>{this.state.counter}</Text>
          {this.state.showError && <Text style={styles.error}>Cannot decrement below zero</Text>}
        </View>
        <View style={styles.controllers}>
          <Button title="Increment" onPress={this.handleIncrement} />
          <Button title="Decrement" onPress={this.handleDecrement} />
        </View>
      </View>
    );
  }
}

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
