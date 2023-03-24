import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import Imagem from "./src/components/Imagem.js";
export default class App extends Component {
  state = {
    imagemURL: "",
    imagemTITULO: "",
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
          "https://www.petz.com.br/blog/wp-content/uploads/2021/08/pato-de-estimacao-1280x720.jpg",
        titulo: "pato.",
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
  adicionar() {
    this.state.urls.push({
      id: this.state.urls.length + 2,
      imagem: this.state.imagemURL,
      titulo: this.state.imagemTITULO,
    });
    this.setState({ urls: this.state.urls });
  }
  teste() {
    console.log(this.state.urls);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#dfe0e2", fontSize: 30 }}>
          Biblioteca de Imagens
        </Text>
        <View style={{ flexDirection: "column" }}>
          <TextInput
            style={{
              marginBottom: 10,
              height: 40,
              backgroundColor: "azure",
              fontSize: 20,
            }}
            placeholder="Titulo da Imagem"
            inputMode="text"
            onChangeText={(imagemTITULO) => this.setState({ imagemTITULO })}
          />
          <TextInput
            style={{
              height: 40,
              backgroundColor: "azure",
              fontSize: 20,
              marginBottom: 10,
            }}
            placeholder="URL da imagem"
            inputMode="text"
            onChangeText={(imagemURL) => this.setState({ imagemURL })}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.adicionar()}
          >
            <Text style={{ fontSize: 20 }}> Adicionar </Text>
          </TouchableOpacity>
        </View>
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
    padding: 2,
    backgroundColor: "lightgreen",
    color: "white",
    minWidth: 70,
    minHeight: 20,
  },
});
