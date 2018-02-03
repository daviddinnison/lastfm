import React, { Component } from "react";
import firebase from "firebase";
import { View } from "react-native";

import HeaderBar from "./components/unprotected/reusable/header-bar";
import LoginForm from "./components/unprotected/forms/login-form";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDNCS8U4XrmAQfffq42cm2Vpp2XARDVZa4",
      authDomain: "weatherboss-e1d77.firebaseapp.com",
      databaseURL: "https://weatherboss-e1d77.firebaseio.com",
      projectId: "weatherboss-e1d77",
      storageBucket: "weatherboss-e1d77.appspot.com",
      messagingSenderId: "862082707571"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <HeaderBar />
        <LoginForm />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default App;
