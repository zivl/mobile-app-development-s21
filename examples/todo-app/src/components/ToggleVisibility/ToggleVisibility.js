import { func } from 'prop-types';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { onShowAll, onShowCompleted, onShowUncompleted } from './toggleVisibilityActions';

function ToggleVisibility({ onShowAll, onShowCompleted, onShowUncompleted }) {
  return (
    <View style={styles.visibilityWrapper}>
      <Button title="All" onPress={onShowAll} />
      <Button title="Completed" onPress={onShowCompleted} />
      <Button title="Uncompleted" onPress={onShowUncompleted} />
    </View>
  );
}

ToggleVisibility.propTypes = { onShowAll: func, onShowCompleted: func, onShowUncompleted: func };

export default connect(null, { onShowAll, onShowCompleted, onShowUncompleted })(ToggleVisibility);

const styles = StyleSheet.create({
  visibilityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
