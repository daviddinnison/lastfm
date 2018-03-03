// react
import React from "react";
import { connect } from "react-redux";

// react native
import { StyleSheet, Text, View } from "react-native";

// actions
import { getAlbumInfo } from "../../../../actions/artist";

// styles
import styles from "./styles/main";

class SingleAlbumMain extends React.Component {
  componentDidMount() {}

  renderAlbum() {
    return (
      <View>
        <Text>You are in the SINGLE ALBUM component......</Text>
        <Text>{this.props.test}</Text>
        <Text>{this.props.name}</Text>
      </View>
    );
  }

  render() {
    return <View>{this.renderAlbum()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    test: "test string!"
  };
};

export default connect(mapStateToProps)(SingleAlbumMain);
