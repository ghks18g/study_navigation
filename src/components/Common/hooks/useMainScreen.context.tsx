import React, {useContext, useState} from 'react';

// write MAIN SCREEN enum
export enum MAIN_SCREEN {
  LOADING,
  USER_LOGIN,
  TAB_NAVIGATOR,
}

// write MainScreenContext Object Type
interface IMainScreenContext {
  mainScreen: MAIN_SCREEN;
  setMainScreen: Function;
}

// create React Context for MainScreen
const MainScreenContext = React.createContext<IMainScreenContext>(null);

//write MainScreen Context Provider
export function MainScreenContextProvider(props) {
  // write state for mainScreen
  const [mainScreen, setMainScreen] = useState<MAIN_SCREEN>(
    MAIN_SCREEN.LOADING,
  );

  // write MainScreenContext Object value
  const value: IMainScreenContext = {
    mainScreen,
    setMainScreen,
  };

  // return MainScreenContext instance.
  return <MainScreenContext.Provider value={value} {...props} />;
}

// write function for Using MainScreenContextProvider at Child components
export default function useMainScreenContext() {
  const context = useContext<IMainScreenContext>(MainScreenContext);

  if (!context) {
    throw new Error('useMainScreenContext is undefined.');
  }

  return context;
}
