//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text, View } from 'react-native';

// styles
import styles from './styles/main';

class Bio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bioText}>{this.props.bio.content}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    bio: state.artist.similarArtistInfo.bio
  };
};

export default connect(mapStateToProps)(Bio);
