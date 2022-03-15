import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';

// write Screen param List...
export type StackNavigatorRouterParamList = {
  MainScreen: undefined;
};

// Create Navigator..
const Stack = createStackNavigator<StackNavigatorRouterParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
