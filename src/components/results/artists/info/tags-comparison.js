// react
import React from "react";
import { connect } from "react-redux";

// react native
import { StyleSheet, Text, View } from "react-native";

class TagsComparison extends React.Component {
  render() {
    console.log('tag comparison component props');
    console.log(this.props.similarArtistTags);
    console.log(this.props.baseComparisonTags, 'baseTags');
    return (
      <View>
        <Text>hello there are tags here</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseComparisonTags: state.artist.baseComparisonTags
  };
};

export default connect(mapStateToProps)(TagsComparison);
