import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { Component } from "react";
import Counter from "./src/components/Counter.js";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter limite={10} limite2={-10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 25,
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    margin: 0,
  },
});
