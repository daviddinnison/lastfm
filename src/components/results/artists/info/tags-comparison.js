// react
import React from "react";
import { connect } from "react-redux";

// react native
import { StyleSheet, Text, View } from "react-native";

class TagsComparison extends React.Component {
  renderComparison() {
    // comparing tags in common. convert array of objects into arrays of tags.
    const baseRaw = this.props.baseComparisonTags.tag;
    const compareToRaw = this.props.similarArtistTags.tag;

    let compareTo = [];
    let base = [];

    for (let i = 0; i < baseRaw.length; i++) {
      base.push(baseRaw[i].name);
    }

    for (let i = 0; i < compareToRaw.length; i++) {
      compareTo.push(compareToRaw[i].name);
    }

    console.log(compareTo, "similarArtistTags inside renderComparison");
    console.log(base, "baseComparisonTags inside renderComparison");

  }

  render() {
    console.log(
      this.props.similarArtistTags,
      "-------11111------similartags0000000"
    );
    return (
      <View>
        <Text>hello there are tags here</Text>
        {this.renderComparison()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseComparisonTags: state.artist.baseComparisonTags,
    similarArtistTags: state.artist.similarArtistInfo.tags
  };
};

export default connect(mapStateToProps)(TagsComparison);
