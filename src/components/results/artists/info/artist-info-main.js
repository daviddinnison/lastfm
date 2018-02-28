//react
import React from "react";
import { connect } from "react-redux";

//react native
import { Image, StyleSheet, Text, View } from "react-native";

//components
import Bio from "./bio";
import Tour from "./tour";
import TagsComparison from "./tags-comparison";

//actions
import { getArtistInfo } from "../../../../actions/artist";

//styles
import styles from "./styles/main";

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
  }

  renderData() {
    console.log(this.props.similarArtistInfo, 'ARTIST INFO PROPS IN COMPONENT')
    const data = this.props.similarArtistInfo;
    return (
      <View style={styles.mainSection}>
        <Text style={styles.header}>{data.name}</Text>
        <TagsComparison/>
        <Tour />
        <Bio />
      </View>
    );
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
    similarArtistInfo: state.artist.similarArtistInfo
  };
};

export default connect(mapStateToProps)(ArtistInfoMain);