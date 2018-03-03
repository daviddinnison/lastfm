//react
import React from "react";
import { connect } from "react-redux";

//react native
import { Image, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

//components
import Bio from "./info/bio";
import Loader from "../../common/loader";
import TopAlbumsMain from "./info/top-albums-main";
import TopTracksMain from "./info/top-tracks-main";
import Tour from "./info/tour";

//styles
import styles from "./info/styles/main";

//actions
import { getArtistInfo } from "../../../actions/artist";

class OriginalArtistMain extends React.Component {
  componentDidMount() {
    this.props.dispatch(getArtistInfo(this.props.originalArtist));
  }

  renderData() {
    const data = this.props.originalArtistInfo;
    return (
      <View style={styles.mainSection}>
        <Text
          style={styles.header}
          onPress={() => {
            Actions.originalArtistInfo();
          }}
        >
          {data.name}
        </Text>
      </View>
    );
  }

  loadingData() {
    if (this.props.loading) {
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
    imageUri: state.artist.imageUri,
    loading: state.artist.loading.artistInfo,
    originalArtist: state.artist.originalArtist,
    originalArtistInfo: state.artist.similarArtistInfo //the artist info is stored in the state in the same place as similarArtistInfo
  };
};

export default connect(mapStateToProps)(OriginalArtistMain);
