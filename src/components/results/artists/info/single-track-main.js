// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { Image } from 'react-native';
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
    // const track = 'Changes';
    // const artist = '2pac'

    //without wiki
    // const track = '500';
    // const artist = 'Lush'
    // this.props.dispatch(getTrackInfo(track, artist));

    //inherited from album action - real version
    console.log('TRACK PROPS', this.props.trackRoute)
    console.log('ARTIST PROPS', this.props.artistRoute);
    this.props.dispatch(getTrackInfo(this.props.trackRoute, this.props.artistRoute))
  }

  renderInfo() {
    if (this.props.track.wiki) {
      return <Text>{this.props.track.wiki.content}</Text>;
    } else {
      return <Text>no track data here</Text>;
    }
  }

  renderTrackTags() {
    const tagData = this.props.track.toptags.tag.map((item, index) => (
      <Content key={index}>
        <Text>{item.name}</Text>
      </Content>
    ));

    return (
      <Content style={[styles.artistInfoContainer, styles.container]}>
        <Text style={styles.infoHeader}>Tags</Text>
        {tagData}
      </Content>
    );
  }

  renderTrack() {
    if (this.props.loading) {
      return <Loader />;
    } else if (this.props.error) {
      return <Error message={this.props.error}/>
    }
    
    else if (this.props.track){
      console.log('track props', this.props.track);
      console.log('error props', this.props.error)
      const data = this.props.track;
      return (
        <Content style={styles.albumsMainBackground}>
          <Content style={styles.artistHead}>
            <Text>Track: {data.name}</Text>
            <Text>Album: {data.album.title}</Text>
            <Text>Plays: {data.playcount}</Text>
            <Image
              style={styles.artistImage}
              source={{ uri: data.album.image[2]['#text'] }}
            />
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
