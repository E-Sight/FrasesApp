/* eslint-disable global-require */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

//Importar componentes
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

//Tela do app
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity style={styles.button} onPress={GerarNovaFrase}>
          <Text style={styles.buttonText}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

//Eventos
const GerarNovaFrase = () => {
  const frases = [];

  frases[0] = 'Entregue suas preocupações ao Senhor, e ele o susterá;' +
    ' jamais permitirá que o justo venha a cair.';
  frases[1] = 'Quem segue a justiça e a lealdade,' +
    ' encontra vida, justiça e honra. ';
  frases[2] = 'Tudo posso naquele que me fortalece.';
  frases[3] = 'Mas, quanto a mim,' +
    ' ficarei atento ao Senhor,' +
    ' esperando em Deus, o meu Salvador,' +
    ' pois o meu Deus me ouvirá.';
  frases[4] = 'Ainda que eu passe por angústias,' +
    ' tu me preservas a vida' +
    ' da ira dos meus inimigos;' +
    ' estendes a tua mão direita e me livras.';

  Alert.alert('Frase do dia', (frases[Math.floor(Math.random() * 5)]));
};
