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
  Button,
  Pressable,
  Alert,
} from 'react-native';

import ListItem from '../Components/ListItem';

export default class RentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      user: props.route.params.user,
    };
    this.getBooks();
  }

  rentBook(bookName) {
    Alert.alert(
      `http://192.168.0.120:8080/Rent/rent/${this.state.user}/${bookName}`,
    );
    fetch(`http://192.168.0.120:8080/Rent/rent/${this.state.user}/${bookName}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.navigation.navigate('Main', {user: this.state.username});
      });
  }

  getBooks() {
    console.log('Fetiching books...');
    fetch('http://192.168.0.120:8080/Find/book')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({books: data});
      });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Rent new book</Text>
          <ScrollView style={styles.listView}>
            {this.state.books.map((item, index) => (
              <Pressable
                style={styles.back}
                onPress={() => this.rentBook(item.name)}>
                <Text style={styles.bookTitle}>
                  {item.name.replace('-', ' ')}
                </Text>
                <Text>{item.author.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 20,
  },
  listView: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    height: '90%',
  },
  title: {
    fontSize: 24,
    color: '#686868',
  },
  bookTitle: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  back: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#646464',
    elevation: 5,
    padding: 20,
  },
});
