import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Gateway extends Component {

  render() {
    return (
      <View style={styles.app}>
        <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "lightgrey"
  }
});

export default Gateway;
