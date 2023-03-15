import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Component } from "react";
export default class App extends Component {
  state = {
    contadordelikes: 0,
  };
  incrementar() {
    this.setState({ contadordelikes: this.state.contadordelikes + 1 });
  }
  decrementar() {
    this.setState({ contadordelikes: this.state.contadordelikes - 1 });
  }
  deletar() {
    this.setState({ contadordelikes: 0 });
  }

  render() {
    return (
      <View style={styles.main}>
        <View>
          <Image
            style={styles.imagem}
            source={require("../../assets/images/imagem4.jpg")}
          />
        </View>
        <Text>Curtidas: {this.state.contadordelikes}</Text>
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.incrementar()}
          >
            <Text> Like </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.decrementar()}
          >
            <Text> Dislike </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.botao} onPress={() => this.deletar()}>
          <Text> Deletar </Text>
        </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    margin: 0,
  },
  imagem: {
    width: 200,
    height: 300,
    resizeMode: "stretch",
    borderColor: "blue",
    borderRadius: 20,
  },
  botoes: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  main: {
    flexDirection: "column",
    marginBottom: 10,
    alignItems: "center",
  },
  botao: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: "deepskyblue",
    color: "white",
  },
  TextInput: {
    marginRight: 10,
  },
});
