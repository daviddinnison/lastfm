//react
import React from "react";
import { connect } from "react-redux";

//react native
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import { Button, Icon, Input, Item, SearchBar, Text } from "native-base";

// actions
import { getSimilarArtist } from "../../actions/artist";

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
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={input =>
              this.setState({
                userInput: input
              })
            }
          />
        </Item>
        <Button
          full
          primary
          onPress={() => {
            this.makeSearch();
          }}
        >
          <Text> Primary </Text>
        </Button>
      </View>
    );
  }
}

export default connect()(MainSearch);
