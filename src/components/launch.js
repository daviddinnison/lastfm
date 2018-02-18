// react
import React from "react";

// react native
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

// components
import MainSearch from "./search/main-search";

class Launch extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome!!!!</Text>
        <MainSearch />
      </View>
    );
  }
}

export default Launch;
