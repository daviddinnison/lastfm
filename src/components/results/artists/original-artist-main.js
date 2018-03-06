//react
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base'; 

// styles
import styles from './styles/main';

class OriginalArtistMain extends React.Component {
  renderTags() {
    if (this.props.tags.length !== 0) {
      const tagData = this.props.tags.tag.map((item, index) => (
        <View key={index} style={styles.originalArtistTagContainer}>
          <Text style={styles.originalArtistTagText}>
            {item.name}
          </Text>
        </View>
      ));
      return <View style={styles.resultContainer}>{tagData}</View>;
    } else {
      return;
    }
  }

  render() {
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
