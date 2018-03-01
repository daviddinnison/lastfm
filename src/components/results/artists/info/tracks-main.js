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
    let topTenTracks = this.props.similarArtistTopTracks;
    console.log("TOP TRACKS", this.props.similarArtistTopTracks);
    return (
      <FlatList
        horizontal={true}
        data={topTenTracks.slice(0, 9)}
        keyExtractor={(item, index) => index}
        renderItem={({ item }, index) => (
          <TracksRendered name={item.name} playcount={Number(item.playcount)} />
        )}
      />
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.subheader}>Top Artist Tracks</Text>
        {this.renderTracks()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { similarArtistTopTracks: state.artist.similarArtistTopTracks };
};

export default connect(mapStateToProps)(TracksMain);
