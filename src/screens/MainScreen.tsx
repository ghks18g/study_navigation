import React, {useEffect} from 'react';

import useMainScreenContext, {
  MAIN_SCREEN,
} from '../components/Common/hooks/useMainScreen.context';

import Spinner from 'react-native-loading-spinner-overlay';
import LoginScreen from './LoginScreen';
import TabNavigator from '../navigators/TabNavigator';

function MainScreen() {
  const {mainScreen, setMainScreen} = useMainScreenContext();

  useEffect(() => {
    setMainScreen(MAIN_SCREEN.USER_LOGIN);
  }, []);

  if (mainScreen === MAIN_SCREEN.LOADING) {
    return <Spinner visible={true} />;
  } else if (mainScreen === MAIN_SCREEN.USER_LOGIN) {
    // alert('MainScreen is USER_LOGIN');
    return <LoginScreen />; // after update .... login Screen or LoginNavigator
  } else if (mainScreen === MAIN_SCREEN.TAB_NAVIGATOR) {
    // alert('MainScreen is TAB_NAVIGATOR');
    return <TabNavigator />; // after update .... TabNavigator.
  }
}

export default MainScreen;
