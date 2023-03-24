import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Component } from "react";
export default class Imagem extends Component {
  state = {
    contadordelikes: 0,
  };
  incrementar() {
    this.setState({ contadordelikes: this.state.contadordelikes + 1 });
  }
  decrementar() {
    this.setState({ contadordelikes: this.state.contadordelikes - 1 });
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.titulo}> {this.props.titulo}</Text>
        <View>
          <Image
            style={styles.imagem}
            source={{
              uri: this.props.imagem,
            }}
          />
        </View>

        <Text style={{ color: "#000000", marginBottom: 10, marginTop: 10 }}>
          Curtidas: {this.state.contadordelikes}
        </Text>
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
          <TouchableOpacity
            style={styles.botaoAlerta}
            onPress={() => this.props.deletar()}
          >
            <Text> Deletar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    width: 140,
    height: 140,
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
    justifyContent: "center",
    backgroundColor: "#dfe0e2",
    minWidth: 156,
    minHeight: 156,
    margin: 10,
  },
  botao: {
    marginLeft: 5,
    padding: 2,
    backgroundColor: "deepskyblue",
    color: "white",
  },
  botaoAlerta: {
    marginLeft: 5,
    marginRight: 5,
    padding: 2,
    backgroundColor: "red",
    color: "white",
  },
  titulo: {
    fontSize: 18,
    marginBottom: 10,
    margin: 5,
    color: "#000000",
  },
});
