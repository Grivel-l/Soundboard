import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const PAD_NUMBER = 4;
class App extends Component {
  constructor(props) {
    super(props);
  }

  renderPads() {
    const renderOnePad = j => {
      const pads = [];
      for (let i = 0; i < PAD_NUMBER; i += 1) {
        const padNumber = j * PAD_NUMBER + i;
        pads.push(
          <View
            key={`Pad${i}${j}`}
            style={styles.pad}
          />
        );
      }

      return pads;
    };

    const pads = [];
    for (let i = 0;i < PAD_NUMBER; i += 1) {
      pads.push(
        <View
          style={{flex: 1, alignSelf: 'stretch'}}
          key={`Line${i}`}
        >
          {renderOnePad(i)}
        </View>
      );
    }

    return pads;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPads()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  pad: {
    backgroundColor: 'gray',
    flex: 1,
    borderRadius: 5,
    margin: 5
  }
});

export default App;
