//react
import React from "react";
import { connect } from "react-redux";

//react native
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

// actions
import { getArtist } from "../../actions/artist";

class MainSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      artist: true,
      song: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      artist: !this.state.artist,
      song: !this.state.song
    });
  }
  componentDidMount() {
    this.props.dispatch(getArtist("Lush"));
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
          {this.state.song && (
            <TouchableHighlight>
              <Text onPress={this.handleClick}>artist</Text>
            </TouchableHighlight>
          )}
          {/* toggles what is displayed as other search */}
          {this.state.artist && (
            <TouchableHighlight>
              <Text onPress={this.handleClick}>songs</Text>
            </TouchableHighlight>
          )}
          {this.state.song && (
            <TouchableHighlight>
              <Text>SONGS</Text>
            </TouchableHighlight>
          )}
        </View>
        <TextInput />
        <TouchableHighlight>
          <Text>Find</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    other: state.other.other
  };
};

export default connect(mapStateToProps)(MainSearch);
// export default MainSearch;
