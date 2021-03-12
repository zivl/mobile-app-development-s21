import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LEFT = 'left'
const RIGHT = 'right'

function Number(props) {
  const { number, onPress } = props
  return (
      <Button onPress={onPress} title={number} />
  )
}

function Result(props) {
  const {isCorrect} = props
  return <Text
    style={StyleSheet.compose(styles.result, {color: isCorrect ? 'green' : 'red'})}
  >
    {isCorrect ? ':)' : ':('}
  </Text>
}


export default class App extends React.Component {
  state = {
    leftNumber: Math.floor(Math.random() * 100),
    rightNumber: Math.floor(Math.random() * 100),
    shouldShowResult: false,
    isCorrect: true
  }

  componentDidMount() {
    console.log('mounted', this.state)
  }

  componentDidUpdate() {
    console.log('updated', this.state)
  }

  checkResult(side) {
    if (side === LEFT && this.state.leftNumber >= this.state.rightNumber) {
      this.setState({shouldShowResult: true, isCorrect: true})
    } else if (side === RIGHT && this.state.leftNumber <= this.state.rightNumber) {
      this.setState({shouldShowResult: true, isCorrect: true})
    } else {
      this.setState({shouldShowResult: true, isCorrect: false})
    }
  }

  render() {
    const { shouldShowResult, leftNumber, rightNumber, isCorrect } = this.state
    return (
      <View style={styles.container}>
        <Number number={leftNumber.toString()} onPress={() => this.checkResult(LEFT)} />
        {shouldShowResult && <Result isCorrect={isCorrect}/>}
        <Number number={rightNumber.toString()} onPress={() => this.checkResult(RIGHT)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
