'use strict';
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const Realm = require('realm');

class SatuScreen extends Component {
  static navigationOptions = {
    title: 'Satu',
  };
  render() {
    let realm = new Realm({
      schema: [{ name: 'Dog', properties: { name: 'string' } }]
    });

    realm.write(() => {
      realm.create('Dog', { name: 'Rex' });
    });

    return (
      <View>
        <Text>
          Count of Dogs in Realm: {realm.objects('Dog').length}
        </Text>
      </View>
    );
  }
}

module.exports = SatuScreen;
