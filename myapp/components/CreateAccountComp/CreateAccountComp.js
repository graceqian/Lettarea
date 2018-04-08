import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button } from 'react-native';

export default class CreateAccountComp extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {text: ''};
  // }

  render() {
    return (
      <View style={{width: '75%'}}>
        <TextInput style={{borderBottomWidth: 1, paddingBottom: 10}}
          placeholder="Username"
          placeholderTextColor="#000"
        />
        <TextInput style={{borderBottomWidth: 1, paddingBottom: 10}}
          placeholder="Password"
          placeholderTextColor="#000"
        />
        <Button
            color= "#7e70a0"
            title="Create"
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('CreateAccountComp', () => App);
