import { StyleSheet, ScrollView, View, FlatList } from "react-native";
import React, { Component } from "react";
import Imagem from "./src/components/Imagem.js";
export default class App extends Component {
  state = {
    urls: [
      {
        imagem:
          "https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg",
      },
      {
        imagem:
          "https://i.pinimg.com/originals/72/73/2d/72732d2a5b02ea432a88ddb0902df1a4.jpg",
      },
      {
        imagem:
          "https://www.chickensmoothie.com/oekaki/image/image.php?id=4114537&size=large&format=auto&rev=1675343459",
      },
      {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
      },
      {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
      },
      {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
      },
      {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.urls}
          renderItem={({ item }) => <Imagem imagem={item.imagem} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "beige",
    flexDirection: "column",
    width: "100%",
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
