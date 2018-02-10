import React, { Component } from "react";
import { AppRegistry, StyleSheet } from "react-native";
import {
  // StyleSheet,
  Text,
  View
} from "react-native";

class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>WeatherBosstest</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    padding: 5
  },
  headerText: {
    color: "#fff"
  }
});

export { HeaderBar };
// AppRegistry.registerComponent('weatherbossnative', () => HeaderBar);
