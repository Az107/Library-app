/**
 * Main Page App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './Components/Header';

import Login from './Screens/Login';
import MainPage from './Screens/MainPage';
import RentPage from './Screens/RentPage';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainPage} />
      <Stack.Screen name="Rent" component={RentPage} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <NavigationContainer>
        <Header />
        <NavStack />
      </NavigationContainer>
    );
  }
}
