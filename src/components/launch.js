// react
import React from "react";

// react native
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

// components
import MainSearch from "./search/main-search";

// styles
import styles from "./styles/main";

class Launch extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome!!!!</Text>
        <MainSearch />
      </View>
    );
  }
}

export default Launch;
