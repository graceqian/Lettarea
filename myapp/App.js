import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TextInput
} from 'react-native';

import LoginComp from './components/LoginComp/LoginComp';
import UserComp from './components/UserComp/UserComp';
import PassComp from './components/PassComp/PassComp';
import ReceivedListComp from './components/ReceivedListComp/ReceivedListComp';
import SentListComp from './components/SentListComp/SentListComp';
import CreateAccountComp from './components/CreateAccountComp/CreateAccountComp';

//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//           <UserComp />
//           <PassComp />
//           <LoginComp />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#7e70a0',
//   }
//  });

import { StackNavigator } from 'react-navigation';
//flex: 1, justifyContent: 'center', alignItems: 'center'
class HomeScreen extends React.Component {
  render() {
    return (
       <View style={{ flex: 1}}>
             <View style={{backgroundColor: 'white'}}>
               <Text style = {{textAlign: 'center', fontSize: 50, fontWeight: 'bold', color: '#7e70a0', paddingTop: 30}}> Lettarea </Text>
             </View>
            <View style={styles.container}>
              <UserComp />
              <PassComp />
              <LoginComp />
              <Button
                  color= "#7e70a0"
                  title="Create Account"
                  onPress={() => this.props.navigation.navigate('CreateAccount')}
              />
            </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight
        style={styles.button}
        onPress={() => { this.props.navigation.navigate('SendLetter') }}
        >
         <Text>  Send Letter  </Text>
        </TouchableHighlight>
        <TouchableHighlight
        style={styles.button}
        onPress={() => { this.props.navigation.navigate('Recieved') }}
        >
         <Text>  Received: 4  </Text>
        </TouchableHighlight>
        <TouchableHighlight
        style={styles.button}
        onPress={() => { this.props.navigation.navigate('Sent') }}
        >
         <Text>      Sent: 3      </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class SendLetterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{paddingBottom: 10}}
          placeholder="Recipient Username"
          placeholderTextColor="#000"
        />
        <TouchableHighlight
        style={styles.button}
        >
         <Text style={{color: 'blue'}}>Current Location</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class ReceivedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ReceivedListComp />
      </View>
    );
  }
}

class SentScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SentListComp />
      </View>
    );
  }
}

class CreateAccountScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CreateAccountComp />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
      Home: {
        screen: HomeScreen,
      },
      Details: {
          screen: DetailsScreen,
      },
      SendLetter: {
          screen: SendLetterScreen,
      },
      Recieved: {
          screen: ReceivedScreen,
      },
      Sent: {
          screen: SentScreen,
      },
      CreateAccount: {
          screen: CreateAccountScreen,
      },
  },
  {
    initialRouteName: 'Home',
  }
  );

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    paddingBottom: 80
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})
