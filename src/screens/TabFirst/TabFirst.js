import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { addText } from '../../store/actions/index';
import { connect } from 'react-redux';

const extension = Platform.select({
  ios: "ios-cloud-upload",
  android: "md-cloud-upload"
});

class TabFirst extends Component {

  static navigationOptions = {
    title: 'TabFirst',
  };

  state = {
    appJson : "",
    key: "",
    value: ""
  };

  keyChangedHandler = val => {
    this.setState({
      key: val
    });
  };

  valueChangedHandler = val => {
    this.setState({
      value: val
    });
  };

  sampleFunction = () => {
    console.log(this.state.key);
    console.log(this.state.value);
    this.props.dispatch({type: 'ADD_TEXT_JSON', keyToAdd: this.state.key, textToAdd: this.state.value})
    //this.props.addKeyValueJSON(this.state.key, this.state.value);
  };

  render() {
    return (
      <View style={styles.buttonStyle}>
        <TextInput
          placeholder="JSON Key"
          value={this.state.key}
          onChangeText={this.keyChangedHandler}
        />
        <TextInput
          placeholder="JSON Value"
          value={this.state.value}
          onChangeText={this.valueChangedHandler}
        />
        <Icon.Button name={extension} onPress={this.sampleFunction}>
            Added values to JSON
        </Icon.Button>
        <Text style={styles.textJson}>
          {this.state.appJson}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    padding: 5
  },
  textJson:{
    margin: 20,
    backgroundColor: "green"
  }
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    addKeyValueJSON: (key, value) => dispatch(addText(props.key,props.value))
  };
}


export default connect(state => ({appJson: state.appJson})) (TabFirst);
