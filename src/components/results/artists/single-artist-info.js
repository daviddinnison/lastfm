//react
import React from "react";

//react native
import { Image, StyleSheet, Text, View } from "react-native";

//styles
import styles from "./styles/single-artist-info";

class SingleArtistResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      data: {bio: {}}
    };
  }

  componentDidMount() {
    const API_KEY = "a6be694f222c3e5ee8f11ab1c626bd00";
    this.setState({ loading: true });
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${
        this.props.route
      }&api_key=${API_KEY}&format=json`,
      {}
    )
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(
        result => {
          this.setState({
            loading: false,
            data: result.artist
          });
        },
        error => {
          this.setState({ loading: false, error });
        }
      );
  }

  renderData() {
    const data = this.state.data;
    return (
      <View>
        <Text style={styles.header}>{data.name}</Text>
        <Text>{data.bio.summary}</Text>
      </View>
    );
  }

  loadingData() {
    if (this.state.loading) {
      return <Text>Loading...</Text>;
    } else if (this.state.data) {
      return <View>{this.renderData()}</View>;
    }
  }

  render() {
    return <View style={styles.container}>{this.loadingData()}</View>;
  }
}

export default SingleArtistResult;
