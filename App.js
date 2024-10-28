import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import login from './login';
import timer from './timer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
        <Stack.Screen name="timer" component={timer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
