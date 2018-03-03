// react
import React from "react";
import { connect } from "react-redux";

// react native
import { FlatList, StyleSheet, Text, View } from "react-native";

// compopnents
import AlbumsRendered from "./albums-rendered";
import Loader from "../../../common/loader";

// styles
import styles from "./styles/main";

class AlbumsMain extends React.Component {
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
          renderItem={({ item }, index) => <AlbumsRendered name={item.name} image={item.image}/>}
        />
      );
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.subheader}>Top Artist Albums</Text>
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

export default connect(mapStateToProps)(AlbumsMain);
