//react
import React from "react";

//react native
import { StyleSheet, Text, View } from "react-native";

class RenderedArtist extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.match}% match</Text>
      </View>
    );
  }
}

export default RenderedArtist;
