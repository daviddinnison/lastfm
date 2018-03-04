// react
import React from "react";
import { connect } from "react-redux";

// react native
import { FlatList, StyleSheet, Text, View } from "react-native";

// compopnents
import TopAlbumsRendered from "./top-albums-rendered";
import Loader from "../../../common/loader";

// styles
import styles from "./styles/main";

class TopAlbumsMain extends React.Component {
  renderAlbums() {
    if (this.props.loadingAlbumInfo) {
      return <Loader />;
    } else {
      let topAlbums = this.props.similarArtistTopAlbums;
      return (
        <FlatList
          horizontal={true}
          data={topAlbums.slice(0, 4)}
          keyExtractor={(item, index) => index}
          renderItem={({ item }, index) => <TopAlbumsRendered name={item.name} artistName={this.props.artistName} image={item.image}/>}
        />
      );
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.subHeader}>Top Artist Albums</Text>
        {this.renderAlbums()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingAlbumInfo: state.artist.loading.topAlbums,
    // loadingAlbumInfo: true,
    similarArtistTopAlbums: state.artist.similarArtistTopAlbums
  };
};

export default connect(mapStateToProps)(TopAlbumsMain);
