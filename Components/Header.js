import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerBack}>
        <StatusBar backgroundColor="#30475e" />
        <Image style={styles.logo} source={require('../Resources/Logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBack: {
    backgroundColor: '#30475e',
    alignItems: 'center',
    padding: 0,
  },
  logo: {
    height: 130,
    width: 150,
    resizeMode: 'stretch',
  },
});
