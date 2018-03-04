// react
import React from "react";

// react native
import { Actions } from "react-native-router-flux";
import { Container, Text } from "native-base";

// components
import MainSearch from "./search/main-search";

// styles
import styles from "./styles/main";

class Launch extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.header}>TuneCatch</Text>
        <Text style={styles.subheader}>There's always more fish in the sea...</Text>
        <MainSearch />
      </Container>
    );
  }
}

export default Launch;
