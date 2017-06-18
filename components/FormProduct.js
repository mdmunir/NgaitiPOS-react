'use strict';
import React, { Component } from 'react';
import {
    Button,
    View,
    TextInput
} from 'react-native';

class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state = props.values;
    }
    save() {
        var data = this.state;
        data.price = parseFloat(data.price);
        data.qty = parseFloat(data.qty);
        this.props.onSave(data);
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
                    onChangeText={(text) => this.setState({ price: text })}
                    value={this.state.price + ''}
                />
                <TextInput placeholder="Quantity" keyboardType="numeric"
                    style={{ flex: 1 }}
                    onChangeText={(text) => this.setState({ qty: text })}
                    value={this.state.qty + ''}
                />
                <Button
                    onPress={this.save.bind(this)}
                    title="Save"
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}

const styles = {
    flex:{flex:1},    
};
module.exports = FormProduct;
