import React, { Component } from "react";
import { Text, ActivityIndicator } from "react-native";
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from "../reusable/index";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  loginSuccess() {
    this.setState({ email: "", password: "", loading: false, error: "" });
  }

  loginError() {
    this.setState({ error: "Authentication Failed.", loading: false });
  }

  loginSubmit() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.loginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.loginSuccess.bind(this))
          .catch(this.loginError.bind(this));
      });
  }

  conditionalButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />;
    } else {
      return <Button onPress={this.loginSubmit.bind(this)} style={styles.login}>Log in</Button>;
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
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

export default LoginForm;
