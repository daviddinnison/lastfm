//react
import React, { Component } from "react";

//react-native
import { StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

//components
import Launch from "./components/launch";
import ArtistResultsMain from "./components/results/artists/artist-results-main";
import ArtistInfoMain from "./components/results/artists/info/artist-info-main";
import SingleAlbumMain from "./components/results/artists/info/single-album-main";


class Gateway extends Component {
  render() {
    return <Router>
        <Stack key="root">
          <Scene key="launch" component={Launch} />
          <Scene key="similarArtists" component={ArtistResultsMain} />
          <Scene key="artistInfo" component={ArtistInfoMain} />
          <Scene key="singleAlbum" component={SingleAlbumMain} />
        </Stack>
      </Router>;
  }
}

export default Gateway;
