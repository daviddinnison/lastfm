// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { Image, View } from 'react-native';
import { Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

// components
import Loader from '../../../common/loader';
import Error from '../../../common/error';

// actions
import { getTrackInfo } from '../../../../actions/artist';

// styles
import styles from './styles/main';

class SingleTrackMain extends React.Component {
  componentDidMount() {
    //error
    // const track = 'fsdfsdfss';
    // const artist = 'lllklk';

    //with wiki
    const track = 'Temperature';
    const artist = 'Sean Paul'

    //without wiki
    // const track = 'Flower Power';
    // const artist = 'Ringo Deathstarr';
    
    
    this.props.dispatch(getTrackInfo(track, artist));


    //inherited from album action - real version
    // console.log('TRACK PROPS', this.props.trackRoute)
    // console.log('ARTIST PROPS', this.props.artistRoute);
    // this.props.dispatch(getTrackInfo(this.props.trackRoute, this.props.artistRoute))
  }

  renderInfo() {
    if (this.props.track.wiki) {
      return (
        <Text style={[styles.container, styles.mainText]}>
          {this.props.track.wiki.content}
        </Text>
      );
    } else {
      return (
        <Text style={[styles.container, styles.mainText]}>
          There is currently no wiki content for this track. Content is
          submitted via the Last.fm platform.
        </Text>
      );
    }
  }

  renderTrackTags() {
    const tagData = this.props.track.toptags.tag.map((item, index) => (
      <Text style={styles.renderedTagSingle} key={index}>
        {item.name}
      </Text>
    ));

    return <View style={styles.renderedTags}>{tagData}</View>;
  }

  renderTrack() {
    if (this.props.loading) {
      return <Loader />;
    } else if (this.props.error) {
      return <Error message={this.props.error} />;
    } else if (this.props.track) {
      console.log('track props', this.props.track);
      console.log('error props', this.props.error);
      const data = this.props.track;
      return (
        <Content style={styles.albumsMainBackground}>
          <Content style={styles.artistHead}>
            <Text style={styles.trackHead}>{data.name}</Text>
            <Text style={styles.albumNameHead}>{data.album.title}</Text>
            <Image
              style={styles.artistImage}
              source={{ uri: data.album.image[2]['#text'] }}
            />
          </Content>
          <Content style={styles.artistInfoContainer}>
            <Text>Plays: {data.playcount}</Text>
          </Content>
          {this.renderTrackTags()}
          {this.renderInfo()}
        </Content>
      );
    }
  }

  render() {
    return <Content>{this.renderTrack()}</Content>;
  }
}

const mapStateToProps = state => {
  return {
    error: state.artist.error.singleTrack,
    loading: state.artist.loading.singleTrack,
    track: state.artist.singleTrack
  };
};

export default connect(mapStateToProps)(SingleTrackMain);
