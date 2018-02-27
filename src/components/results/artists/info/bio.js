//react
import React from "react";
import { connect } from "react-redux";

//react native
import { StyleSheet, Text, View } from "react-native";

class Bio extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.bio.summary}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    bio: state.artist.similarArtistInfo.bio
  };
};

export default connect(mapStateToProps)(Bio);