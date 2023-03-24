import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { Component } from "react";
import Imagem from "./src/components/Imagem.js";
export default class App extends Component {
  state = {
    a: 0,
    urls: [
      {
        id: 1,
        imagem:
          "https://i.pinimg.com/originals/72/73/2d/72732d2a5b02ea432a88ddb0902df1a4.jpg",
        titulo: "Gato Guitarra",
      },
      {
        id: 2,
        imagem:
          "https://www.chickensmoothie.com/oekaki/image/image.php?id=4114537&size=large&format=auto&rev=1675343459",
        titulo: "Let me do it for you",
      },
      {
        id: 3,
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
      {
        id: 4,
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
      {
        id: 5,
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
      {
        id: 6,
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
      {
        id: 7,
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
    ],
  };
  deletar(url) {
    const indice = this.state.urls.indexOf(url);
    if (indice !== -1) {
      this.state.urls.splice(indice, 1);
      this.setState({ urls: this.state.urls });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#dfe0e2", fontSize: 30 }}>
          Biblioteca de Imagens
        </Text>
        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.state.urls.map((link) => (
              <Imagem
                deletar={() => this.deletar(link)}
                titulo={link.titulo}
                imagem={link.imagem}
                key={link.id}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#010a13",
    flexDirection: "column",
    width: "100%",
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    marginLeft: 5,
    padding: 2,
    backgroundColor: "deepskyblue",
    color: "white",
  },
});
