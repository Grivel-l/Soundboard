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
            <View style={[styles.row, styles.controls]}>
              <Icon name={'backward'} size={60} color={'white'} />
            </View>
            <View style={[styles.row, {flex: 2}]}>
              <Image
                source={require('../img/radio.png')}
                resizeMode={'contain'}
                style={styles.radio}
              />
            </View>
            <View style={[styles.row, styles.controls]}>
              <Icon name={'forward'} size={60} color={'white'} />
            </View>
          </View>
          <View style={styles.row}>
            <Icon name={'stop'} color={'white'} size={60} />
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
    marginBottom: 20
  }
});

export default App;
