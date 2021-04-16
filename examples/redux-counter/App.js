import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import CounterScreen from './src/components/Counter/CounterScreen';
import { createStore } from 'redux';
import rootReducer from './src/rootReducer';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}
