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

  _renderItem = ({item, index}) => (
    <View style={{backgroundColor: index%2===0?"white":"grey"}}>
      <Text>{item.name} | {item.category} | {item.price}</Text>
    </View>
  );
  render() {

    return (
      <View>
        <FlatList keyExtractor={(item, index) => index}
          data={products}
          renderItem={this._renderItem }
        />
        <Button title="Add product" onPress={() => this.props.navigation.navigate('add_product')} />
        <Button title="Home" onPress={() => this.props.navigation.navigate('home')} />
      </View>
    );
  }
}

module.exports = ProductScreen;
