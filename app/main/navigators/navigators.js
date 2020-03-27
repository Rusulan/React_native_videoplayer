import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/Main';
import LanguageScreen from '../screens/Languages';
import VideoPlayer from '../screens/VideoPlayer';
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{gestureEnabled: false, headerShown: false}}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Language" component={LanguageScreen} />
          <Stack.Screen name="Player" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
 export default AppNavigator;

  