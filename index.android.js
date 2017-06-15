/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = require('./components/HomeScreen');
const SatuScreen = require('./components/SatuScreen');

const ngepos = StackNavigator({
  Home: { screen: HomeScreen },
  Satu: { screen: SatuScreen },
});

AppRegistry.registerComponent('ngepos', () => ngepos);
