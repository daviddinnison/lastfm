import React from "react";
import { Image, Text, View } from "react-native";

import globe from "../images/login.png";
// https://pixabay.com/en/internet-www-mouse-web-business-42583/

const LandingPanel = props => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.subHeading}>Be the boss of your own weather</Text>
      <Image source={globe} style={styles.image} />
    </View>
  );
};

const styles = {
  containerStyle: {},
  subHeading: {
    color: "black"
  },
  image: {
    alignSelf: "center",
    height: 150,
    width: 150
  }
};

export { LandingPanel };
