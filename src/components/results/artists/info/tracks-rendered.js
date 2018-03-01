//react
import React from "react";

//react native
import { StyleSheet, Text, View } from "react-native";


class TracksRendered extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>plays: {this.props.playcount}</Text>
      </View>
    );
  }
}

export default TracksRendered;
