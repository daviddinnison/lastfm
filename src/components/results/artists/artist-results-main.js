// react
import React from "react";
import { connect } from "react-redux";

// react native
import { FlatList, StyleSheet, Text, View } from "react-native";

// components
import SimilarArtistResult from "./similar-artist-result";

class ArtistResultsMain extends React.Component {

  renderResults() {
    return (
      <FlatList
        data={this.props.similarArtists}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <SimilarArtistResult name={item.name} match={item.match} image={item.image}/>
        )}
      />
    );
  }

  render() {
    return <View>{this.renderResults()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    similarArtists: state.artist.similarArtists
  };
};

export default connect(mapStateToProps)(ArtistResultsMain);
