//react
import React from "react";

//react native
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

//styles
import styles from "./styles/main";

class SimilarArtistResult extends React.Component {
  render() {
    return (
      <View style={styles.mainSection}>
        <Text
          style={styles.header}
          onPress={() => {
            Actions.artistInfo({ route: this.props.name });
          }}
        >
          {this.props.name}
        </Text>
        <Text>{(this.props.match * 100).toFixed(2)}% match</Text>
      </View>
    );
  }
}

export default SimilarArtistResult;
