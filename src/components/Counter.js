import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Component } from "react";
export default class App extends Component {
  state = {
    contador: 0,
  };
  incrementar() {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador + 1 });
    }
  }
  decrementar() {
    if (this.state.contador > this.props.limite2) {
      this.setState({ contador: this.state.contador - 1 });
    }
  }
  deletar() {
    this.setState({ contador: 0 });
  }

  render() {
    return (
      <View style={styles.contador}>
        <Text>Contador:{this.state.contador}</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.incrementar()}
        >
          <Text> + </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.decrementar()}
        >
          <Text> - </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => this.deletar()}>
          <Text> Deletar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    margin: 0,
  },
  contador: {
    flexDirection: "row",
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
