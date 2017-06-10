import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Sound from './Sound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playMusic: false,
      sound: null,
      stop: false,
      nextMusic: false,
      previousMusic: false
    };

    this.playMusic = this.playMusic.bind(this);
    this.nextMusic = this.nextMusic.bind(this);
    this.previousMusic = this.previousMusic.bind(this);

    this.stopEnd = this.stopEnd.bind(this);
    this.nextMusicEnd = this.nextMusicEnd.bind(this);
    this.soundEnd = this.soundEnd.bind(this);
    this.musicEnd = this.musicEnd.bind(this);
    this.previousMusicEnd = this.previousMusicEnd.bind(this);
  }

  playSound(sound) {
    this.setState({sound});
  }

  playMusic() {
    if (!this.state.playMusic) {
      this.setState({playMusic: true});
    }
  }

  nextMusic() {
    this.setState({nextMusic: true});
  }

  previousMusic() {
    this.setState({previousMusic: true});
  }

  nextMusicEnd() {
    this.setState({nextMusic: false});
  }

  previousMusicEnd() {
    this.setState({previousMusic: false});
  }

  soundEnd() {
    this.setState({sound: null});
  }

  musicEnd() {
    this.setState({playMusic: false});
  }

  stopEnd() {
    this.setState({stop: false, playMusic: false, sound: null});
  }

  render() {
    return (
      <View style={styles.container}>
        <Sound
          sound={this.state.sound}
          playMusic={this.state.playMusic}
          stop={this.state.stop}
          nextMusic={this.state.nextMusic}
          previousMusic={this.state.previousMusic}
          nextMusicEnd={this.nextMusicEnd}
          previousMusicEnd={this.previousMusicEnd}
          soundEnd={this.soundEnd}
          musicEnd={this.musicEnd}
          stopEnd={this.stopEnd}
        />
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => {
              this.playSound(0);
            }}
            style={styles.imgWrapper}
            underlayColor={'rgba(0, 0, 0, 0.1)'}
          >
            <Image
              source={require('../img/firstPad.png')}
              style={styles.pad}
              resizeMode={'contain'}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.playSound(1);
            }}
            style={styles.imgWrapper}
            underlayColor={'rgba(0, 0, 0, 0.1)'}
          >
            <Image
              source={require('../img/secondPad.png')}
              style={styles.pad}
              resizeMode={'contain'}
            />
          </TouchableHighlight>
        </View>
        {/*backgroundColor: 'transparent', if we don't, Touchable events don't work properly (Really weird)*/}
        <View style={[styles.row, {alignItems: 'stretch', backgroundColor: 'transparent'}]}>
          <View style={[styles.row, {flexDirection: 'row', alignItems: 'stretch'}]}>
            <View style={[styles.row, styles.controls]}>
              <TouchableHighlight
                onPress={this.previousMusic}
                underlayColor={'rgba(0, 0, 0, 0.1)'}
              >
              <Icon name={'backward'} size={60} color={'white'} />
              </TouchableHighlight>
            </View>
            <View style={[styles.row, {flex: 2, backgroundColor: 'transparent'}]}>
              <TouchableHighlight
                onPress={this.playMusic}
                underlayColor={'rgba(0, 0, 0, 0.1)'}
              >
                <Image
                  source={require('../img/radio.png')}
                  resizeMode={'contain'}
                  style={styles.radio}
                />
              </TouchableHighlight>
            </View>
            <View style={[styles.row, styles.controls]}>
              <TouchableHighlight
                onPress={this.nextMusic}
                underlayColor={'rgba(0, 0, 0, 0.1)'}
              >
                <Icon name={'forward'} size={60} color={'white'} />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              onPress={() => {
                this.setState({stop: true})
              }}
              underlayColor={'rgba(0, 0, 0, 0.1)'}
            >
              <Icon name={'stop'} color={'white'} size={60} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#00797d',
    padding: 10
  },
  row: {
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pad: {
    width: '100%',
    height: '50%',
    marginLeft: 10,
    marginRight: 10
  },
  imgWrapper: {
    justifyContent: 'center'
  },
  radio: {
    width: '100%'
  },
  controls: {
    justifyContent: 'flex-end',
    marginBottom: 20,
    backgroundColor: 'transparent'
  }
});

export default App;
