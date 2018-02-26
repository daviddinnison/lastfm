//react
import React, { Component } from "react";

//react-native
import { StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

import Launch from "./components/launch";
import ArtistResultsMain from "./components/results/artists/artist-results-main";


class Gateway extends Component {
  render() {
    return <Router>
        <Stack key="root">
          <Scene key="launch" component={Launch} />
          <Scene key="artists" component={ArtistResultsMain} />
        </Stack>
      </Router>;
  }
}

export default Gateway;
