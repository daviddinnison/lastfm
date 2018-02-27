//react
import React from "react";

//react native
import { StyleSheet, Text, View } from "react-native";

class Tour extends React.Component {
  renderTour() {
    if (this.props.tour > 0) {
      return <Text>Currently on tour</Text>;
    } else {
      return <Text>No concerts scheduled</Text>;
    }
  }
  render() {
    return <View>{this.renderTour()}</View>;
  }
}

export default Tour;
