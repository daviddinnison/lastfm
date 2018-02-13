import React, { Component } from "react";
import { connect } from 'react-redux';
import { Text, ActivityIndicator } from "react-native";

import { Button, Card, CardSection, Input, Spinner } from "../reusable/index";

import { login } from "../../../actions/auth";

class LoginForm extends Component {
  state = { username: "", password: "", error: "", loading: false };

  loginSuccess() {
    this.setState({ username: "", password: "", loading: false, error: "" });
  }

  loginError() {
    this.setState({ error: "Authentication Failed.", loading: false });
  }

  loginSubmit(user, pass) {
    // const username = this.state.username;
    // const password = this.state.password;
    this.props.dispatch(login(user, pass));
    // this.setState({ error: "", loading: true });
  }

  conditionalButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />;
    } else {
      return (
        <Button
          style={styles.login}
          onPress={() => {
            this.loginSubmit(this.state.username, this.state.password);
          }}
        >
          Log in
        </Button>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.conditionalButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  login: {
    borderColor: "black",
    borderBottomWidth: 2,
    borderTopWidth: 2
  }
};

const mapStateToProps = function (state) {
  return {
      currentUser: state.currentUser,
  }
};

export default connect(mapStateToProps)(LoginForm);
