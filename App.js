import { StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Imagem from "./src/components/Imagem.js";
export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Imagem imagem="https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg" />
        <Imagem imagem="https://i.pinimg.com/originals/72/73/2d/72732d2a5b02ea432a88ddb0902df1a4.jpg" />
        <Imagem imagem="https://www.chickensmoothie.com/oekaki/image/image.php?id=4114537&size=large&format=auto&rev=1675343459" />
        <Imagem imagem="https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg" />
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
