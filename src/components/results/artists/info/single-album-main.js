// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { Content, Text } from 'native-base';
import { Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

// components
import Loader from '../../../common/loader';

// actions
import { getAlbumInfo } from '../../../../actions/artist';

// styles
import styles from './styles/main';

class SingleAlbumMain extends React.Component {
  componentDidMount() {
    // const testAlbum = 'Loveless';
    // const testArtist = 'My Bloody Valentine';
    // this.props.dispatch(getAlbumInfo(testAlbum, testArtist));

    this.props.dispatch(getAlbumInfo(this.props.route, this.props.artistName));
  }

  renderAlbumTags() {
    const tagData = this.props.album.tags.tag.map((item, index) => (
      <Text style={styles.renderedTagSingle} key={index}>{item.name}</Text>
      
      // <Content key={index}>
      //   <Text>{item.name}</Text>
      // </Content>
    ));

    return (
      <View style={styles.renderedTags}>
        {tagData}
      </View>
    );
  }

  renderAlbumTracks() {
    console.log(this.props.album.tracks.track);
    const trackData = this.props.album.tracks.track.map((item, index) => (
      <Content key={index}>
        <Text
          onPress={() => {
            Actions.singleTrackMain({
              trackRoute: item.name,
              artistRoute: this.props.album.artist
            });
          }}
        >
          {index + 1} {item.name} length: {item.duration}
        </Text>
      </Content>
    ));
    return (
      <Content style={[styles.albumsMainBackground, styles.container]}>
        <Text style={styles.infoHeader}>Tracks</Text>
        {trackData}
      </Content>
    );
  }

  renderAlbum() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      console.log('ALBUM DATA IN COMPONENT!!!!', this.props.album);
      const data = this.props.album;
      return (
        <Content style={styles.albumsMainBackground}>
          <Content style={styles.artistHead}>
            <Text style={styles.artistName}>{data.artist}</Text>
            <Text style={styles.albumNameHead}>{data.name}</Text>
            <Image
              style={styles.artistImage}
              source={{ uri: data.image[2]['#text'] }}
            />
          </Content>
          {this.renderAlbumTags()}
          {this.renderAlbumTracks()}
        </Content>
      );
    }
  }

  render() {
    return <Content style={styles.artistInfoContainer}>{this.renderAlbum()}</Content>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.artist.loading.singleAlbum,
    album: state.artist.singleAlbum
  };
};

export default connect(mapStateToProps)(SingleAlbumMain);
