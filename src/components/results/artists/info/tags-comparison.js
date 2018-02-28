// react
import React from "react";
import { connect } from "react-redux";

// react native
import { StyleSheet, Text, View } from "react-native";

// styles
import styles from "./styles/main";

class TagsComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commonTags: []
    };
  }
  renderComparison() {
    // comparing tags in common. convert array of objects into arrays of tags.
    const baseRaw = this.props.baseComparisonTags.tag;
    const compareToRaw = this.props.similarArtistTags.tag;

    let compareTo = [];
    let base = [];
    let commonTags = [];

    for (let i = 0; i < baseRaw.length; i++) {
      base.push(baseRaw[i].name);
    }

    for (let i = 0; i < compareToRaw.length; i++) {
      compareTo.push(compareToRaw[i].name);
    }

    for (let i = 0; i < compareTo.length; i++) {
      for (let j = 0; j < base.length; j++) {
        if (compareTo[i] === base[j]) {
          commonTags.push(base[j]);
        }
      }
    }

    //MAP FUNCTION FOR COMMON TAGS
    const renderCommonTags = commonTags.map((item, index) => (
      <Text key={index}>{item}</Text>
    ));
    //RETURN MAP FUNCTION
    return <Text>{renderCommonTags}</Text>;
  }

  render() {
    return <View>
    <Text style={styles.subheader}>Common tags with {this.props.originalArtist}</Text>
    {this.renderComparison()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    baseComparisonTags: state.artist.baseComparisonTags,
    originalArtist: state.artist.originalArtist,
    similarArtistTags: state.artist.similarArtistInfo.tags
  };
};

export default connect(mapStateToProps)(TagsComparison);
