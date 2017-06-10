import React, {Component} from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  NativeModules
} from 'react-native';
import Sound from 'react-native-sound';

class Pad extends Component {
  constructor(props) {
    super(props);

    this.isPlaying = false;
    this.sound = null;

    this.playSound = this.playSound.bind(this);
  }

  componentWillMount() {
    this.sound = new Sound(this.props.sound, Sound.MAIN_BUNDLE);
  }

  playSound() {
    if (this.sound !== null) {
      this.isPlaying = true;
      this.sound.play(success => {
        this.isPlaying = false;
      });
    }
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={this.playSound}
        underlayColor={'transparent'}
      >
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
