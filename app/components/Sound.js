import React, {Component} from 'react';
import {
  View
} from 'react-native';
import RNSound from 'react-native-sound';

class Sound extends Component {
  constructor(props) {
    super(props);

    this.sounds = [];
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sound !== nextProps.sound) {
      if (this.props.sound !== null) {
        this.sounds[this.props.sound].stop(() => {
          this.playSound(nextProps.sound);
        });
      } else {
        this.playSound(nextProps.sound);
      }
    }
  }

  loadSounds() {
    this.sounds.push(new RNSound('sound1.mp3', Sound.MAIN_BUNDLE))
    this.sounds.push(new RNSound('sound2.mp3', Sound.MAIN_BUNDLE))
  }

  componentWillMount() {
    this.loadSounds();
  }

  playSound(index) {
    if (index !== null) {
      this.sounds[index].play(success => {
        this.props.soundEnd();
      });
    }
  }

  render() {
    return (
      <View />
    );
  }
}

export default Sound;
