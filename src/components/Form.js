import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default class Form extends Component {
    state={
        name:'',
        email:'',
    }

  handleName = (e) => {
    this.setState({
        name: e.nativeEvent.text
    })
    
    
  };
  render() {
    return (
      <View style={{ width: "100%" }}>
        <TextInput onChange={this.handleName} style={styles.input} placeholder="Nombre" />
        <TextInput onChangeText={(email)=> this.setState({email})} style={styles.input} placeholder="correo electrónico" />
        <Button
          title="guardar"
          onPress={() => {
            alert("Touched");
          }}
        />
  <Text>{this.state.name}</Text>
  <Text>{this.state.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#aaa",
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    marginVertical: 10
  }
});
