'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Button
} from 'react-native';

let realm = require('../realmdb/RealmInit');
let products = realm.objects('Product');

class ProductScreen extends Component {
  static navigationOptions = {
    title: 'Products',
  };

  render() {

    return (
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        <Button title="Add product" onPress={() => this.props.navigation.navigate('add_product')} />
        <Button title="Home" onPress={() => this.props.navigation.navigate('home')} />
      </View>
    );
  }
}

module.exports = ProductScreen;
