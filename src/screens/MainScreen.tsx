import React, {useEffect} from 'react';

import useMainScreenContext, {
  MAIN_SCREEN,
} from '../components/Common/hooks/useMainScreen.context';

import Spinner from 'react-native-loading-spinner-overlay';

function MainScreen() {
  const {mainScreen, setMainScreen} = useMainScreenContext();

  useEffect(() => {
    setMainScreen(MAIN_SCREEN.TAB_NAVIGATOR);
  }, []);

  if (mainScreen === MAIN_SCREEN.LOADING) {
    return <Spinner visible={true} />;
  } else if (mainScreen === MAIN_SCREEN.USER_LOGIN) {
    alert('MainScreen is USER_LOGIN');
    return <></>; // after update .... login Screen or LoginNavigator
  } else if (mainScreen === MAIN_SCREEN.TAB_NAVIGATOR) {
    alert('MainScreen is TAB_NAVIGATOR');
    return <></>; // after update .... TabNavigator.
  }
}

export default MainScreen;
