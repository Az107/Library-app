import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  onPressLogin(navigation) {
    if (
      this.state.username != null &&
      this.state.username !== '' &&
      this.state.username.trim(' ') !== ''
    ) {
      navigation.navigate('Main', {user: this.state.username});
    } else {
      Alert.alert('please enter your username');
    }
  }

  render() {
    return (
      <View>
        <View style={styles.back}>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={text => this.setState({username: text})}
          />
        </View>
        <View style={styles.back2}>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#686868' : '#F05454',
              },
              styles.loginButton,
            ]}
            onPress={() => this.onPressLogin(this.props.navigation)}>
            <Text style={styles.text}> Login </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#30475e',
    alignItems: 'center',
    height: '80%',
  },
  back2: {
    alignItems: 'center',
    height: '20%',
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#F05454',
    margin: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '50%',
    borderRadius: 4,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    backgroundColor: '#FFFFFF',
    marginVertical: 70,
    margin: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '80%',
    borderRadius: 4,
  },
});
