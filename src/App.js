import React, { Component } from "react";
import firebase from "firebase";
import { Text, View } from "react-native";

import {
  Button,
  HeaderBar,
  Spinner
} from "./components/unprotected/reusable/index";

import LoginForm from "./components/unprotected/forms/login-form";

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDNCS8U4XrmAQfffq42cm2Vpp2XARDVZa4",
      authDomain: "weatherboss-e1d77.firebaseapp.com",
      databaseURL: "https://weatherboss-e1d77.firebaseio.com",
      projectId: "weatherboss-e1d77",
      storageBucket: "weatherboss-e1d77.appspot.com",
      messagingSenderId: "862082707571"
    });
    //signs users in or out
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLoginContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Text>you are logged in....</Text>
            <Button onPress={() => firebase.auth().signOut()}>Sign Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <HeaderBar />
        {this.renderLoginContent()}
      </View>
    );
  }
}

export default App;
