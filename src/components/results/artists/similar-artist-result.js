//react
import React from "react";

//react native
import { Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { Card, CardItem, Text } from "native-base";

//styles
import styles from "./styles/main";

class SimilarArtistResult extends React.Component {
  render() {
    return <Card style={styles.resultContainer}>
        <CardItem header style={styles.resultInfo}>
          <Text onPress={() => {
              Actions.artistInfo({ route: this.props.name });
            }}>
            {this.props.name}
            <Text>{(this.props.match * 100).toFixed(2)}% match</Text>
          </Text>
        </CardItem>
          <Image style={styles.image} source={{ uri: this.props.image }} />

        {/* <CardItem style={styles.resultImage}>
          <Image
            style={styles.image}
            source={{ uri: this.props.image }}
          />
        </CardItem> */}
      </Card>;
  }
}

export default SimilarArtistResult;
