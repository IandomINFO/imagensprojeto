import { StyleSheet, ScrollView, View, FlatList, Text } from "react-native";
import React, { Component } from "react";
import Imagem from "./components/Imagem.js";
export default class App extends Component {
  state = {
    urls: [
      {
        imagem:
          "https://i.pinimg.com/originals/72/73/2d/72732d2a5b02ea432a88ddb0902df1a4.jpg",
        titulo: "Gato Guitarra",
      },
      {
        imagem:
          "https://www.chickensmoothie.com/oekaki/image/image.php?id=4114537&size=large&format=auto&rev=1675343459",
        titulo: "Let me do it for you",
      },
      {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
       {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
       {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
       {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },
       {
        imagem:
          "https://i1.sndcdn.com/artworks-FZYtcnfgLHJp52Q2-lEfruQ-t500x500.jpg",
        titulo: "Let me do it for you",
      },

    ],
    deletar(url) {
      const indice = this.state.urls.indexOf(url);
      this.state.urls.splice(indice, 1);
    },
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#dfe0e2", fontSize: 30}}>
          Biblioteca de Imagens
        </Text>
        <ScrollView> 
        <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
          {this.state.urls.map((link) => (
            <Imagem deletar={()=>deletar(link)} titulo={link.titulo} imagem={link.imagem} />
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
});
