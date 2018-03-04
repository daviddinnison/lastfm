//react
import React from "react";

//react native
import { Actions } from "react-native-router-flux";
import { Card, CardItem, Text } from "native-base";

//styles
import styles from "./styles/main";

class SimilarArtistResult extends React.Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text
            style={styles.header}
            onPress={() => {
              Actions.artistInfo({ route: this.props.name });
            }}
          >
            {this.props.name}
          </Text>
        </CardItem>
        <CardItem>
          <Text>{(this.props.match * 100).toFixed(2)}% match</Text>
        </CardItem>
      </Card>
    );
  }
}

export default SimilarArtistResult;
