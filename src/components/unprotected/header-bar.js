import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  // StyleSheet,
  Text,
  View
} from 'react-native';


class HeaderBar extends Component {
  render() {
    return (
      <View>
        <Text>this is the header</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default HeaderBar;
AppRegistry.registerComponent('weatherbossnative', () => HeaderBar);