//react
import React from "react";

//react native
import { StyleSheet, Text, View } from "react-native";

//styles
import createStyles from "../../baseStyles";
const styles = createStyles();

class RenderedArtist extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>{this.props.name}</Text>
        <Text>{this.props.match}% match</Text>
      </View>
    );
  }
}

export default RenderedArtist;
