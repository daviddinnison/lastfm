//react
import React from "react";

//react native
import { Image, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

//styles
import styles from "./styles/rendered-artist"

class SimilarArtistResult extends React.Component {
  render() {
    console.log(this.props.image[0].text)
    return (
      <View style={styles.container}>
        <Text style={styles.header} onPress={() => {  Actions.artistInfo() }}>{this.props.name}</Text>
        <Text>{this.props.match}% match</Text>
        <Image source={this.props.image[0].text}/>
      </View>
    );
  }
}

export default SimilarArtistResult;