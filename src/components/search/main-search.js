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
import { getArtist } from "../../actions/artist";
import { getTag } from "../../actions/tag";

class MainSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      artist: true,
      tag: false,
      userInput: "Lush"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      artist: !this.state.artist,
      tag: !this.state.tag
    });
  }

  makeSearch() {
    Keyboard.dismiss();
    if (this.state.artist) {
      this.props.dispatch(getArtist(this.state.userInput));
    } else if (this.state.tag) {
      this.props.dispatch(getTag(this.state.userInput));
    }
  }

  render() {
    return (
      <View>
        <View>
          {/* toggles what is displayed as current selected search */}
          {this.state.artist && (
            <TouchableHighlight>
              <Text>ARTIST</Text>
            </TouchableHighlight>
          )}
          {this.state.tag && (
            <TouchableHighlight>
              <Text onPress={this.handleClick}>artist</Text>
            </TouchableHighlight>
          )}
          {/* toggles what is displayed as other search */}
          {this.state.artist && (
            <TouchableHighlight>
              <Text onPress={this.handleClick}>tags</Text>
            </TouchableHighlight>
          )}
          {this.state.tag && (
            <TouchableHighlight>
              <Text>TAGS</Text>
            </TouchableHighlight>
          )}
        </View>
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

const mapStateToProps = function (state) {
  return {
    
  }
};

export default connect(mapStateToProps)(MainSearch);
