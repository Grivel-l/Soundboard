import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

import Sound from './Sound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playMusic: false,
      sound: null
    };

    this.soundEnd = this.soundEnd.bind(this);
  }

  playSound(sound) {
    this.setState({sound});
  }

  soundEnd() {
    this.setState({sound: null});
  }

  render() {
    console.log('Sound: ', this.state.sound);
    return (
      <View style={styles.container}>
        <Sound
          sound={this.state.sound}
          playMusic={this.state.playMusic}
          soundEnd={this.soundEnd}
        />
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => {
              this.playSound(0);
            }}
            underlayColor={'rgba(0, 0, 0, 0.2)'}
            style={styles.imgWrapper}
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
            underlayColor={'rgba(0, 0, 0, 0.2)'}
            style={styles.imgWrapper}
          >
            <Image
              source={require('../img/secondPad.png')}
              style={styles.pad}
              resizeMode={'contain'}
            />
          </TouchableHighlight>
        </View>
        <View style={[styles.row, {alignItems: 'stretch'}]}>
          <View style={[styles.row, {flexDirection: 'row', alignItems: 'stretch'}]}>
            <View style={[styles.row, {backgroundColor: 'purple'}]}/>
            <View style={[styles.row, {backgroundColor: 'purple', flex: 2}]}/>
            <View style={[styles.row, {backgroundColor: 'purple'}]}/>
          </View>
          <View style={[styles.row, {backgroundColor: 'orange'}]}>

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
    alignItems: 'center'
  },
  pad: {
    width: '100%',
    height: '50%',
    marginLeft: 10,
    marginRight: 10
  },
  imgWrapper: {
    justifyContent: 'center'
  }
});

export default App;
