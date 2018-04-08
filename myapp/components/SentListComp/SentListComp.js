import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StackNavigator,
  ListView
} from 'react-native'

export default class MyComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['1: City, Username (Receiver)', '2: NYC, Casquach', '3: Tokyo, RaggedySnail', '4:   ', '5:  ', '6:  ']),
    };
  }

  render() {
    return (
      <ListView contentContainerStyle={styles.contentContainer}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
 contentContainer: {
   flex: 1,
   justifyContent: 'center',
 },
})
