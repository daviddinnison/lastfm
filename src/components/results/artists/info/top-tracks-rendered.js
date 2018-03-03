// react
import React from "react";

// react native
import { StyleSheet, Text, View } from "react-native";

// styles
import styles from "./styles/main";

class TopTracksRendered extends React.Component {
  render() {
    
    return <View style={styles.trackContainer}>
        <Text style={styles.trackName}>{this.props.name}</Text>
        <Text style={styles.trackPlays}>plays: {this.props.playcount.toLocaleString()}</Text>
      </View>;
  }
}

export default TopTracksRendered;
