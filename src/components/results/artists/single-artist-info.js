//react
import React from "react";

//react native
import { Image, StyleSheet, Text, View } from "react-native";

//styles
import styles from "./styles/single-artist-info";

class SingleArtistResult extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>YOU IN THE ARTIST COMPONENT</Text>
        <Text></Text>
        <Image/>
      </View>
    );
  }
}

export default SingleArtistResult;
