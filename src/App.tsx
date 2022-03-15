/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../RootNavigation';
import {MainScreenContextProvider} from '../src/components/Common/hooks/useMainScreen.context';
import StackNavigator from '../src/navigators/StackNavigator';

const MyApp = props => {
  return <StackNavigator />;
};

const App = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer ref={navigationRef}>
        <MainScreenContextProvider>
          <MyApp props={props} />
        </MainScreenContextProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
