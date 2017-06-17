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

var HomeScreen = require('./components/HomeScreen');
var ProductScreen = require('./components/ProductScreen');
var AddProductScreen = require('./components/AddProductScreen');

const ngepos = StackNavigator({
  home: { screen: HomeScreen },
  product: { screen: ProductScreen },
  add_product: { screen: AddProductScreen },
}, { initialRouteName: 'home' });

AppRegistry.registerComponent('ngepos', () => ngepos);
