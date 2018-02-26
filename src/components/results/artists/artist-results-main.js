//react
import React from "react";
import { connect } from "react-redux";

//react native
import { StyleSheet, Text, View } from "react-native";

class ArtistResultsMain extends React.Component {
  componentDidMount() {
    console.log("HERE ARE THE ARTIST RESULTS MAIN PROPS!!!!!");
    console.log(this.props.similarArtists);
  }
  render() {
    return (
      <View>
        <Text />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    similarArtists: state.artist.similarArtists
  };
};

export default connect(mapStateToProps)(ArtistResultsMain);
