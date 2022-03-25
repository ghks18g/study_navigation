import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import TabNavigator from './TabNavigator';

// write Screen param List...
export type StackNavigatorRouterParamList = {
  MainScreen: undefined;
  TabNavigator: undefined;
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
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
