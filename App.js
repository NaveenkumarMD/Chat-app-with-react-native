import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signup from './Components/Signup'
import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Login from './Components/Login';
import Contactspage from './Components/Contactspage';
import Chatpage from './Components/Chatpage';
import { LogBox } from 'react-native';
const Stack=createStackNavigator()
export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Contacts" component={Contactspage}></Stack.Screen>
        <Stack.Screen name="Chatpage" component={Chatpage}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

