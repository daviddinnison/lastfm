// react
import React from "react";
import { connect } from "react-redux";

// react native
import { StyleSheet, Text, View } from "react-native";

// styles
import styles from "./styles/main";

//actions
import { getTopTracks } from "../../../../actions/artist";

class Tracks extends React.Component {
  renderTags() {
    return <Text>nothing yet!!</Text>;
  }

  render() {
    console.log(
      "TRACKS COMPONENT......PROPS!!!",
      this.props.similarArtistTopTracks
    );
    return <View>{this.renderTags()}</View>;
  }
}

const mapStateToProps = state => {
  return { similarArtistTopTracks: state.artist.similarArtistTopTracks };
};

export default connect(mapStateToProps)(Tracks);
