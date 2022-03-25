import styled from 'styled-components';

export const LoginViewWrapper = styled.View`
  padding: 100px 0px 100px;
  display: flex;
  flex: 1;
  background-color: #ffffaa;
  justify-content: space-between;
  align-items: center;
`;

export const LoginViewTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: blue;
`;

export const LoginButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #ff9999;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  font-size: 15px;
  font-weight: normal;
  color: white;
`;
