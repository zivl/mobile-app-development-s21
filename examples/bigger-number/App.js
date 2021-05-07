import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LEFT = 'left';
const RIGHT = 'right';

function Number(props) {
  const { number, onPress } = props;
  return <Button onPress={onPress} title={number} />;
}

function Result(props) {
  const { isCorrect } = props;
  return (
    <Text style={StyleSheet.compose(styles.result, { color: isCorrect ? 'green' : 'red' })}>
      {isCorrect ? ':)' : ':('}
    </Text>
  );
}

export default function App() {
  const [shouldShowResult, setShouldShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const leftNumber = Math.floor(Math.random() * 100);
  const rightNumber = Math.floor(Math.random() * 100);

  useEffect(() => {
    console.log('use effect', isCorrect);
    if (isCorrect !== null) {
      setShouldShowResult(true);
    }
  }, [isCorrect]);

  function checkResult(side) {
    if (side === LEFT && this.state.leftNumber >= this.state.rightNumber) {
      setIsCorrect(true);
    } else if (side === RIGHT && this.state.leftNumber <= this.state.rightNumber) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <View style={styles.container}>
      <Number number={leftNumber.toString()} onPress={() => checkResult(LEFT)} />
      {shouldShowResult && <Result isCorrect={isCorrect} />}
      <Number number={rightNumber.toString()} onPress={() => checkResult(RIGHT)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
