import React, {Component} from 'react';
import {
  View
} from 'react-native';
import RNSound from 'react-native-sound';

class Sound extends Component {
  constructor(props) {
    super(props);

    this.sounds = [];
    this.musics = [];
    this.musicPlaying = 0;
  }

  componentWillMount() {
    this.loadSounds();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sound !== nextProps.sound) {
      this.playSound(nextProps.sound);
    }

    if (!this.props.playMusic && nextProps.playMusic) {
      this.playMusic();
    }

    if (nextProps.stop) {
      this.stop();
    }

    if (nextProps.nextMusic) {
      this.nextMusic();
    }

    if (nextProps.previousMusic) {
      this.previousMusic();
    }
  }

  loadSounds() {
    this.sounds.push(new RNSound('sound1.mp3', Sound.MAIN_BUNDLE));
    this.sounds.push(new RNSound('sound2.mp3', Sound.MAIN_BUNDLE));

    this.musics.push(new RNSound('music1.mp3', Sound.MAIN_BUNDLE));
    this.musics.push(new RNSound('music2.mp3', Sound.MAIN_BUNDLE));
    this.musics.push(new RNSound('music3.mp3', Sound.MAIN_BUNDLE));
  }

  nextMusic() {
    this.musics[this.musicPlaying].stop();
    this.musicPlaying += 1;
    if (this.musicPlaying === 3) {
      this.musicPlaying = 0;
    }
    this.playMusic();
    this.props.nextMusicEnd();
  }

  previousMusic() {
    this.musics[this.musicPlaying].stop();
    this.musicPlaying -= 1;
    if (this.musicPlaying === -1) {
      this.musicPlaying = 2;
    }
    this.playMusic();
    this.props.previousMusicEnd();
  }

  playSound(index) {
    if (index !== null) {
      this.sounds[index].play(success => {
        this.props.soundEnd();
      });
    }
  }

  playMusic() {
    console.log('Play music', this.musicPlaying);
    if (this.musics[this.musicPlaying].isLoaded()) {
      this.musics[this.musicPlaying].play(() => {
        this.props.musicEnd();
      });
    } else {
      this.props.musicEnd();
    }
  }

  stop() {
    this.sounds.map(sound => {
      sound.stop();
    });
    this.musics.map(music => {
      music.stop();
    });
    
    this.props.stopEnd();
  }

  render() {
    return (
      <View />
    );
  }
}

export default Sound;
