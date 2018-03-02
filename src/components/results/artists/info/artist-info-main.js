//react
import React from "react";
import { connect } from "react-redux";

//react native
import { Image, StyleSheet, Text, View } from "react-native";

//components
import Bio from "./bio";
import TagsComparison from "./tags-comparison";
import Tour from "./tour";
import TracksMain from "./tracks-main";

//styles
import styles from "./styles/main";

//actions
import { getArtistInfo, getTopTracks } from "../../../../actions/artist";

class ArtistInfoMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      data: { bio: {}, tags: [] }
    };
  }

  componentDidMount() {
    this.props.dispatch(getArtistInfo(this.props.route));
    this.props.dispatch(getTopTracks(this.props.route))
  }

  renderData() {
    const data = this.props.similarArtistInfo;
    console.log("DATA", this.props.similarArtistInfo.image)
    return <View style={styles.mainSection}>
        <Text style={styles.header}>{data.name}</Text>
        <Image style={{ width: 50, height: 50 }} source={{ uri: this.props.similarArtistInfo.image[0]["#text"] }} />

        {/* <TagsComparison /> */}
        <Tour />
        <TracksMain />
        <Bio />
      </View>;
  }

  loadingData() {
    if (this.state.loading) {
      return <Text>Loading...</Text>;
    } else if (this.state.data) {
      return <View>{this.renderData()}</View>;
    }
  }

  render() {
    return <View style={styles.container}>{this.loadingData()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    similarArtistInfo: state.artist.similarArtistInfo,
    imageUri: state.artist.imageUri
  };
};

export default connect(mapStateToProps)(ArtistInfoMain);
