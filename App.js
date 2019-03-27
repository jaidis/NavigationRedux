/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @todo Aplicación básica que contendrá un redux con varios json(stringify),
 * varios flags de control (boolean) y navegación por pestañas
 * Utilizar el elemento switch para controlar que se cargará y en que orden
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          Login with Facebook
        </Icon.Button>
      </View>
    );
  }
}

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
