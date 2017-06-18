'use strict';
import React, { Component } from 'react';
import {
    Button,
    View,
    TextInput
} from 'react-native';
const FormProduct = require('./FormProduct');

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
    addProduct(data) {
        realm.write(() => {
            realm.create('Product', data);
        });
        this.props.navigation.navigate('product');
    }
    render() {
        return (
            <FormProduct values={this.state} onSave={this.addProduct.bind(this)}/>
        );
    }
}

module.exports = AddProductScreen;
