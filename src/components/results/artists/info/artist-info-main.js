//react
import React from "react";
import { connect } from "react-redux";

//react native
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

//components
import Bio from "./bio";
import Loader from "../../../common/loader";
import TagsComparison from "./tags-comparison";
import TopAlbumsMain from "./top-albums-main";
import TopTracksMain from "./top-tracks-main";
import Tour from "./tour";

//styles
import styles from "./styles/main";

//actions
import { getArtistInfo } from "../../../../actions/artist";

class ArtistInfoMain extends React.Component {
  componentDidMount() {
    this.props.dispatch(getArtistInfo(this.props.route));
  }

  renderData() {
    const data = this.props.similarArtistInfo;
    return (
      <ScrollView style={styles.mainSection}>
        <Text style={styles.header}>{data.name}</Text>
        <Image
          style={{ width: 162, height: 162 }}
          source={{ uri: this.props.similarArtistInfo.image[2]["#text"] }}
        />
        <TagsComparison />
        <Tour />
        <TopAlbumsMain />
        <TopTracksMain />
        <Bio />
      </ScrollView>
    );
  }

  loadingData() {
    if (this.props.loadingArtistInfo) {
      return <Loader />;
    } else {
      return <View>{this.renderData()}</View>;
    }
  }

  render() {
    return <View style={styles.container}>{this.loadingData()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    loadingArtistInfo: state.artist.loading.artistInfo,
    imageUri: state.artist.imageUri,
    similarArtistInfo: state.artist.similarArtistInfo
  };
};

export default connect(mapStateToProps)(ArtistInfoMain);
