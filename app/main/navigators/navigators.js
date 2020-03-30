import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import VideoPlayer from "../screens/VideoPlayer";


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="VideoPlayer" component={VideoPlayer} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </ProfileStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            }
            // You can return any component that you like here!
             return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#660066',
          inactiveTintColor: '#cccccc',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
