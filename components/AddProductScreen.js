'use strict';
import React, { Component } from 'react';
import {
    Button,
    View,
    TextInput
} from 'react-native';

let realm = require('../realmdb/RealmInit');

class AddProductScreen extends Component {
    static navigationOptions = {
        title: 'Add Product',
    };
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: 0.0,
            qty: 0.0
        };
    }
    addProduct() {
        realm.write(() => {
            realm.create('Product', this.state);
        });
        this.props.navigation.navigate('product');
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput placeholder="Name"
                    style={{ flex: 1 }}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />
                <TextInput placeholder="Category"
                    style={{ flex: 1 }}
                    onChangeText={(text) => this.setState({ category: text })}
                    value={this.state.category}
                />
                <TextInput placeholder="Price" keyboardType="numeric"
                    style={{ flex: 1 }}
                    onChangeText={(text) => this.setState({ price: parseFloat(text) })}
                    value={this.state.price + ''}
                />
                <TextInput placeholder="Quantity" keyboardType="numeric"
                    style={{ flex: 1 }}
                    onChangeText={(text) => this.setState({ qty: parseFloat(text) })}
                    value={this.state.qty + ''}
                />
                <Button
                    onPress={() => this.addProduct()}
                    title="Save"
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}

module.exports = AddProductScreen;
