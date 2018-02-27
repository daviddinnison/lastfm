// react
import React from "react";
import { connect } from "react-redux";

// react native
import { StyleSheet, Text, View } from "react-native";

class TagsComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseTags: [],
      otherArtistTags: {tags: []} 
    };
  }

  renderComparison() {
    const compareToRaw = this.props.tags.tag;//THIS IS UNDEFINED!!!!!
    const baseRaw = this.props.baseComparisonTags.tag;

    console.log(compareToRaw, "compareToRaw");
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
    console.log(compareTo, "compareTo tags inside renderComapriasonb");
    

  }

  render() {
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
    baseComparisonTags: state.artist.baseComparisonTags
  };
};

export default connect(mapStateToProps)(TagsComparison);
