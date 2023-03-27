import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Component } from "react";
export default class App extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={{ color: "#dfe0e2", fontSize: 30 }}>
          Biblioteca de Imagens
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <TextInput
            style={styles.textinput}
            placeholder="Titulo da Imagem"
            inputMode="text"
            onChangeText={(imagemTITULO) => this.setState({ imagemTITULO })}
          />
          <TextInput
            style={styles.textinput}
            placeholder="URL da imagem"
            inputMode="text"
            onChangeText={(imagemURL) => this.setState({ imagemURL })}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.adicionar()}
          >
            <Text style={{ fontSize: 20 }}> Adicionar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#010a13",
    flexDirection: "column",
    width: "100%",
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  botao: {
    padding: 5,
    backgroundColor: "lightgreen",
    color: "white",
    alignSelf: "center",
  },
  textinput: {
    marginRight: 10,
    height: 40,
    backgroundColor: "azure",
    fontSize: 20,
    padding: 10,
  },
});
