import React, {Component} from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class Pad extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.container}>
        <View style={styles.pad} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pad: {
    backgroundColor: 'gray',
    flex: 1,
    borderRadius: 5,
    margin: 5
  }
});

export default Pad;
