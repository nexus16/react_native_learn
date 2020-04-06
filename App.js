/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home/HomeScreen';
import DrawerContainer from './src/screens/DrawerContainer/DrawerContainer';


const Stack = createStackNavigator();
function MainNavigator({ navigation }) {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      
    </Stack.Navigator>
  )
}


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition='left'
        initialRouteName='Main'
        drawerStyle={{
          width: 250
        }}
        drawerContent={props=> DrawerContainer}
      >
        <Drawer.Screen name='Main' component={MainNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}