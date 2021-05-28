import { func } from 'prop-types';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export const AddItem = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.wrapper}>
      <TextInput
        testID="todo-input-text"
        value={value}
        clearButtonMode="while-editing"
        onChangeText={setValue}
        style={styles.textInput}
        placeholder="what up?"
      />
      <Button
        title="Add"
        onPress={() => {
          onSubmit(value);
          setValue('');
        }}
      />
    </View>
  );
};

AddItem.propTypes = {
  onSubmit: func,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  textInput: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
  },
});
