import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="HomeScreen"  >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})