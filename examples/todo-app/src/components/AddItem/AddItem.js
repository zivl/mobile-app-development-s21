import { func } from 'prop-types';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const AddItem = ({ onSubmit }) => {
  const inputRef = React.createRef();
  return (
    <View style={styles.wrapper}>
      <TextInput
        ref={inputRef}
        clearButtonMode="while-editing"
        style={styles.textInput}
        placeholder="what up?"
        onSubmitEditing={({ nativeEvent }) => {
          onSubmit(nativeEvent.text);
          inputRef.current.clear();
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
