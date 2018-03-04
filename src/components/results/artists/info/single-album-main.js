// react
import React from "react";
import { connect } from "react-redux";

// react native
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// components
import Loader from "../../../common/loader";

// actions
import { getAlbumInfo } from "../../../../actions/artist";

// styles
import styles from "./styles/main";

class SingleAlbumMain extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAlbumInfo(this.props.route, this.props.artistName));
  }

  renderAlbumTags() {
    const tagData = this.props.album.tags.tag.map((item, index) => (
      <View key={index}>
        <Text>{item.name}</Text>
      </View>
    ));
    return (
      <View>
        <Text style={styles.subHeader}>Tags</Text>
        {tagData}
      </View>
    );
  }

  renderAlbumTracks() {
    console.log(this.props.album.tracks.track);
    const trackData = this.props.album.tracks.track.map((item, index) => (
      <View key={index}>
        <Text>{item.name}</Text>
        {/* <Text>length: {item.duration}</Text> */}
      </View>
    ));
    return (
      <View>
        <Text style={styles.subHeader}>Tracks</Text>
        {trackData}
      </View>
    );
  }

  renderAlbum() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      console.log("ALBUM DATA IN COMPONENT!!!!", this.props.album);
      const data = this.props.album;
      return (
        <ScrollView style={styles.mainSection}>
          <Text style={styles.header}>{this.props.route}</Text>
          <Image
            style={{ width: 162, height: 162 }}
            source={{ uri: data.image[2]["#text"] }}
          />
          {this.renderAlbumTags()}
          {this.renderAlbumTracks()}
        </ScrollView>
      );
    }
  }

  render() {
    return <View>{this.renderAlbum()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.artist.loading.singleAlbum,
    album: state.artist.singleAlbum
  };
};

export default connect(mapStateToProps)(SingleAlbumMain);
