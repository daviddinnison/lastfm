//react
import React from "react";
import { connect } from "react-redux";

//react native
import { StyleSheet, Text, View } from "react-native";

import { testAction } from "../../actions/forecast";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(testAction());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.test}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = function(state) {
  return {
    test: state.test
  };
};

export default connect(mapStateToProps)(Dashboard);
