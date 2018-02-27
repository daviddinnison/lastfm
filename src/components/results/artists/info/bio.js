//react
import React from "react";

//react native
import { StyleSheet, Text, View } from "react-native";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.bio
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.bio}</Text>
      </View>
    );
  }
}

export default Bio;
