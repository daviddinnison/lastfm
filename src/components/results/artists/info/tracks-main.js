// react
import React from "react";
import { connect } from "react-redux";

// react native
import { FlatList, StyleSheet, Text, View } from "react-native";

// compopnents
import TracksRendered from "./tracks-rendered";

// styles
import styles from "./styles/main";

//actions
import { getTopTracks } from "../../../../actions/artist";

class TracksMain extends React.Component {
  renderTracks() {
    const pretend = [
      { name: "Kailee" },
      { name: "Desmond" },
      { name: "Murphy" },
      { name: "Jewell" },
      { name: "Stanley" }
      
    ];
    return (
      <FlatList
        horizontal={true}
        data={pretend}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <TracksRendered name={item.name} />}
      />
    );
  }

  render() {
    console.log(
      "TracksMain COMPONENT......PROPS!!!",
      this.props.similarArtistTopTracks
    );
    return (
      <View>
        <Text>HELLO tracks here--------</Text>
        {this.renderTracks()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { similarArtistTopTracks: state.artist.similarArtistTopTracks };
};

export default connect(mapStateToProps)(TracksMain);
