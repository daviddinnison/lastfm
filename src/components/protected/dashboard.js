import React from "react";
import firebase from "firebase";
import { Image, Text, View } from "react-native";

import { Card, CardSection, Button } from "../unprotected/reusable/index";

const Dashboard = props => {
  return (
    <View style={styles.containerStyle}>
      <Card>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>Sign Out</Button>
          <Text style={styles.subHeading}>THIS IS THE Dashboard</Text>
        </CardSection>
      </Card>
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

export { Dashboard };
