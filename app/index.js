import React from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './components/App';

const Index = () => {
  return (
    <App />
  );
};

AppRegistry.registerComponent('app', () => Index);
