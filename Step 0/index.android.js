/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Importing React.
import React, { Component } from 'react';
// Importing all of the components we are using.
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Creating our main component.
class MovieSearchApp extends Component {
  // The contents of the render function will be displayed on the page when the component loads.
  render() {
    return (
      /*<View>s are like the React-Native equivalent of <div>s in HTML.*/
      /*To apply a style to a view or any element you create a style object then reference it inline.*/
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

// Difining styles
// To apply a style to an element you reference the style object inline. ex: style={styles.container}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MovieSearchApp', () => MovieSearchApp);
