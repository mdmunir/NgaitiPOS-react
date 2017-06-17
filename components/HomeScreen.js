'use strict';
import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={{flex:1,justifyContent: 'center'}}>
        <Button
          onPress={() => this.props.navigation.navigate('product')}
          title="Go to Products"
          style={{flex:1, height:50}}
        />
      </View>
    );
  }
}

module.exports = HomeScreen;
