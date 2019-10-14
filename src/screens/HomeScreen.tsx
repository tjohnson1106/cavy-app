import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Home Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
