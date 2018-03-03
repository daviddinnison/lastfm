// react
import React from "react";

// react native
import { Image, StyleSheet, Text, View } from "react-native";

// styles
import styles from "./styles/main";

class AlbumsRendered extends React.Component {
  render() {
    return <View style={styles.trackContainer}>
        <Text>{this.props.name}</Text>
        <Image style={{ width: 60, height: 60 }} source={{ uri: this.props.image[1]["#text"] }} />
      </View>;
  }
}

export default AlbumsRendered;
