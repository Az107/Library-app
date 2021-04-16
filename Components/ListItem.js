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
  Pressable,
  Alert,
} from 'react-native';

export default class ListItem extends Component {
  onPress(item) {
    Alert.alert(item.name, item.author.name);
  }

  render() {
    return (
      <Pressable
        style={styles.back}
        onPress={() => this.onPress(this.props.content)}>
        <Text style={styles.title}>{this.props.content.name}</Text>
        <Pressable style={styles.removeButton}>
          <Text style={styles.removeButtonText}>X</Text>
        </Pressable>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 20,
  },
  back: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#646464',
    elevation: 5,
    height: 60,
  },
  removeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F15455',
    width: '20%',
    height: '100%',
    margin: 0,
  },
  removeButtonText: {
    fontSize: 30,
  },
});
