import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const extension = Platform.select({
  ios: "ios-log-out",
  android: "md-log-out"
});

class TabSecond extends Component {
  sampleFunction = () => {};
  render() {
    return (
      <View style={styles.buttonStyle}>
        <Icon.Button name={extension} onPress={this.sampleFunction}>
            Logout
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    padding: 5
  }
});

export default TabSecond;
