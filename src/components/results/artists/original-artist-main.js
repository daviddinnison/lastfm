//react
import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

// styles
import styles from './styles/main';

class OriginalArtistMain extends React.Component {
  renderTags() {
    if (this.props.tags.length !== 0) {
      console.log('array is true', this.props.tags);
      const tagData = this.props.tags.tag.map((item, index) => (
        <Text>{item.name}</Text>
      ));
      return(<View>{tagData}</View>)
    } else {
      return;
    }
  }

  render() {
    console.log(
      '-----------------base comparison tags----------',
      this.props.tags
    );
    return (
      <View style={styles.originalArtistContainer}>
        <Text style={styles.originalArtistHeader}>
          {this.props.originalArtist}
        </Text>
        {this.renderTags()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    originalArtist: state.artist.originalArtist,
    tags: state.artist.baseComparisonTags
  };
};

export default connect(mapStateToProps)(OriginalArtistMain);
