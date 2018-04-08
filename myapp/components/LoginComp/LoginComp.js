import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  StackNavigator,
  Button
} from 'react-native'
import { withNavigation } from 'react-navigation';

class LoginComp extends Component {


    //this.props.navigation.navigate('Details')


 render() {
     //<Button title="Login" onPress={() => { this.props.navigation.navigate('Details') }} />;
      return (
      <View /*style={styles.container}*/ style={{paddingTop: 20}}>
        <TouchableHighlight
         style={styles.button}
         onPress={() => { this.props.navigation.navigate('Details') }}
        >
         <Text> Login </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default withNavigation(LoginComp);

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
 })

AppRegistry.registerComponent('LoginComp', () => App)
