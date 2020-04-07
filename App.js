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

import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import RecipeScreen from './src/screens/Recipe/RecipeScreen';
import RecipesListScreen from './src/screens/RecipesList/RecipesListScreen';
import IngredientScreen from './src/screens/Ingredient/IngredientScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import IngredientsDetailsScreen from './src/screens/IngredientsDetails/IngredientsDetailsScreen';

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
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
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
        drawerContent={props=> <DrawerContainer {...props}/>}
      >
        <Drawer.Screen name='Main' component={MainNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

console.disableYellowBox = true;