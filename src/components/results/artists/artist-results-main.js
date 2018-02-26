// react
import React from "react";
import { connect } from "react-redux";

// react native
import { FlatList, StyleSheet, Text, View } from "react-native";

// components
import RenderedArtist from "./rendered-artist";

class ArtistResultsMain extends React.Component {
  componentDidMount() {
    console.log("HERE ARE THE ARTIST RESULTS MAIN PROPS!!!!!");
    console.log(this.props.similarArtists);
  }

  renderResults() {
    return (
      <FlatList
        data={this.props.similarArtists}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <RenderedArtist name={item.name} match={item.match} />
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
