import { StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Imagem from "./src/components/Imagem.js";
export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Imagem imagem="imagem1.jpg" />
        <Imagem imagem="imagem2.jpeg" />
        <Imagem imagem="imagem3.jpeg" />
        <Imagem imagem="imagem4.jpg" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 25,
    flex: 1,
    backgroundColor: "beige",
    flexDirection: "column",
    width: "100%",
    margin: 0,
  },
});
