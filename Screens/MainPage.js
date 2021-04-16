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
  RefreshControl,
} from 'react-native';

import ListItem from '../Components/ListItem';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    console.log('logged as:' + props.route.params.user);
    this.state = {
      books: [],
      user: props.route.params.user,
    };
    this.getBooks();
  }

  refreshing = false;

  getBooks() {
    console.log('Fetiching books...');
    fetch('http://192.168.0.120:8080/Find/user/' + this.state.user)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({books: data.books});
      });
    this.refreshing = false;
  }

  onPressNew(navigation) {
    navigation.navigate('Rent', {user: this.state.user});
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Your Books</Text>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.refreshing}
                onRefresh={() => this.getBooks()}
              />
            }
            style={styles.listView}>
            {this.state.books.map((item, index) => (
              <ListItem content={item} />
            ))}
            <Pressable
              style={({pressed}) => [
                {
                  borderColor: pressed ? '#686868' : '#FFFFFF',
                  elevation: 1,
                },
                styles.newButton,
              ]}
              onPress={() => this.onPressNew(this.props.navigation)}>
              <Text>+</Text>
            </Pressable>
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
  newButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#686868',
    borderWidth: 3,
    alignItems: 'center',
    padding: 25,
    margin: 10,
    marginBottom: 15,
    elevation: 10,
  },
});
