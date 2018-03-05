// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { FlatList } from 'react-native';
import { Container, Content } from 'native-base';

// components
import OriginalArtistMain from './original-artist-main';
import SimilarArtistResult from './similar-artist-result';

// styles
import styles from './styles/main';

class ArtistResultsMain extends React.Component {
  renderOriginalArtist() {
    return <OriginalArtistMain />;
  }

  renderSimilarArtists() {
    console.log('input data', this.props.similarArtists);
    return (
      <FlatList
        data={this.props.similarArtists.slice(0, 5)}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <SimilarArtistResult
            name={item.name}
            match={item.match}
            image={item.image[2]['#text']}
          />
        )}
      />
    );
  }

  render() {
    return (
      <Container>
        <Content>{this.renderSimilarArtists()}</Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // originalArtist: "My Bloody Valentine",
    // originalArtist: state.artist.originalArist,
    similarArtists: state.artist.similarArtists
  };
};

export default connect(mapStateToProps)(ArtistResultsMain);
