//react
import React from "react";
import { connect } from 'react-redux';

//react native
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

// actions
import { getSimilarArtist } from "../../actions/artist";
import { getTag } from "../../actions/tag";

class MainSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userInput: "My Bloody Valentine"
    };
  }
  
  makeSearch() {
    Keyboard.dismiss();
    this.props.dispatch(getSimilarArtist(this.state.userInput));
  }

  render() {
    return (
      <View>
        
        <TextInput
          onChangeText={input => this.setState({ userInput: input })}
        />
        <TouchableHighlight
          onPress={() => {
            this.makeSearch();
          }}
        >
          <Text>Find</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


export default connect()(MainSearch);
