import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PassComp extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {text: ''};
  // }

  render() {
    return (
      // <View style={{padding: 10}}>
      //   <TextInput
      //     style={{height: 40}}
      //     placeholder="Type here to translate!"
      //     onChangeText={(text) => this.setState({text})}
      //   />
      //   <Text style={{padding: 10, fontSize: 42}}>
      //     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      //   </Text>
      // </View>
      <View style={{width: '75%', paddingTop: 30}}>
        <TextInput style={{borderBottomWidth: 1}}
          placeholder="Password"
          placeholderTextColor="#000"
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('PassComp', () => App);
