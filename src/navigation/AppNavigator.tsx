import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//screens
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
