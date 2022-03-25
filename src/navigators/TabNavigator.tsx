import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import TabScreen2 from '../screens/TabScreen2';
import TabScreen3 from '../screens/TabScreen3';
import TabScreen4 from '../screens/TabScreen4';

export type TabNavigatorRouteParamList = {
  HomeScreen: {};
  TabScreen2: {};
  TabScreen3: {};
  TabScreen4: {};
};

const Tab = createBottomTabNavigator<TabNavigatorRouteParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarButton: ({to, children, onPress}) => {
            return (
              <TouchableWithoutFeedback
                onPress={e => {
                  onPress(e);
                  console.log('home clicked');
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{'home'}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <Tab.Screen
        name={'TabScreen2'}
        component={TabScreen2}
        options={{
          tabBarButton: ({to, children, onPress}) => {
            return (
              <TouchableWithoutFeedback
                onPress={e => {
                  onPress(e);
                  console.log('tab2 clicked');
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{'Tab2'}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <Tab.Screen
        name={'TabScreen3'}
        component={TabScreen3}
        options={{
          tabBarButton: ({to, children, onPress}) => {
            return (
              <TouchableWithoutFeedback
                onPress={e => {
                  onPress(e);
                  console.log('home clicked');
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{'Tab3'}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <Tab.Screen
        name={'TabScreen4'}
        component={TabScreen4}
        options={{
          tabBarButton: ({to, children, onPress}) => {
            return (
              <TouchableWithoutFeedback
                onPress={e => {
                  onPress(e);
                  console.log('home clicked');
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{'Tab4'}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
