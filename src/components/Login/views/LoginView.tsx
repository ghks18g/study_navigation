import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useMainScreenContext, {
  MAIN_SCREEN,
} from '../../Common/hooks/useMainScreen.context';
import {
  LoginButton,
  LoginButtonText,
  LoginViewTitle,
  LoginViewWrapper,
} from '../styles/LoginView.styles';

export const LoginView = props => {
  const {setMainScreen} = useMainScreenContext();
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginViewWrapper>
        <LoginViewTitle>{'로그인 화면 타이틀'}</LoginViewTitle>
        <LoginButton
          onPress={() => {
            setMainScreen(MAIN_SCREEN.TAB_NAVIGATOR);
          }}>
          <LoginButtonText>{'로그인'}</LoginButtonText>
        </LoginButton>
      </LoginViewWrapper>
    </SafeAreaView>
  );
};
