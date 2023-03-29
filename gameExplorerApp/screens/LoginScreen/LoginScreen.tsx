import React from 'react';
import {useAuth0} from 'react-native-auth0';
import styled from 'styled-components/native';
import AuthLogo from './AuthLogo';
import AppLogo from './AppLogo';

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 150px 0px 50px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;
const AppIntro = styled.View`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const AppTitle = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;
const LoginBTN = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffc52f;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const LoginBTNtext = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;
const AuthLogoSVG = styled(AuthLogo)``;

const LoginScreen = () => {
  const {authorize} = useAuth0();
  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <AppIntro>
        <AppLogo width="400px" height="220px" />
        <AppTitle>Game Explorer</AppTitle>
      </AppIntro>
      <LoginBTN onPress={onLogin}>
        <LoginBTNtext>Log In</LoginBTNtext>
      </LoginBTN>
      <AuthLogoSVG />
    </Container>
  );
};

export default LoginScreen;
