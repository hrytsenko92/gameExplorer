import React from 'react';
import {useAuth0} from 'react-native-auth0';
import styled from 'styled-components/native';
import Svg, {G, Path} from 'react-native-svg';
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
  font-family: 'Electrolize';
  font-size: 30px;
  font-weight: 600;
  color: #5a6271;
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
  font-family: 'Electrolize';
  font-size: 25px;
  font-weight: 600;
  color: #454b56;
`;
const AuthLogoSVG = styled.View``;

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
      <AuthLogoSVG>
        <Svg width={120} height={63} viewBox="0 0 81 24" fill="none">
          <G fill="#5a6271">
            <Path d="M16.1-1.75H9.345l2.1 6.51H18.2l-5.46 3.885 2.1 6.545c3.5-2.555 4.655-6.44 3.36-10.43l-2.1-6.51zM.525 4.76H7.28l2.1-6.51H2.59L.525 4.76C-.77 8.75.35 12.635 3.885 15.19l2.1-6.545L.525 4.76zm3.36 10.43 5.46 3.85 5.46-3.85-5.46-3.955-5.46 3.955zM54.88 4.62c-1.61 0-2.625.735-3.115 1.89h-.105V1.155h-2.38v14h2.45v-6.09c0-1.505.945-2.38 2.24-2.38s2.03.84 2.03 2.24v6.23h2.45v-6.65c0-2.485-1.4-3.885-3.57-3.885zm10.22-3.5c-3.325 0-5.32 2.59-5.32 7.105S61.74 15.4 65.1 15.4c3.325 0 5.32-2.625 5.32-7.175S68.425 1.12 65.1 1.12zm-2.8 7.105c0-3.29 1.085-5.005 2.8-5.005 1.19 0 2.03.805 2.485 2.345l-5.215 3.78c-.07-.315-.07-.7-.07-1.12zm2.8 5.04c-1.19 0-2.1-.84-2.52-2.52l5.25-3.815c.035.42.07.875.07 1.295 0 3.325-1.085 5.04-2.8 5.04zM38.22 10.78c0 1.575-1.12 2.345-2.205 2.345s-1.96-.84-1.96-2.135V4.725h-2.45v6.615c0 2.52 1.435 3.92 3.465 3.92 1.54 0 2.66-.84 3.115-1.995h.105v1.855h2.38V4.725h-2.45v6.055zM26.04 4.585c-2.205 0-3.85.98-4.41 2.87l2.275.315c.245-.735.945-1.33 2.135-1.33s1.75.56 1.75 1.61v.035c0 .7-.735.735-2.555.945-1.82.21-3.955.84-3.955 3.185 0 2.03 1.505 3.115 3.5 3.115 1.61 0 2.59-.77 3.045-1.645h.07v1.435h2.345V8.155c.035-2.73-2.205-3.57-4.2-3.57zm1.785 6.825c0 1.155-.945 2.135-2.415 2.135-1.015 0-1.75-.455-1.75-1.365s.84-1.33 1.925-1.505c.63-.105 1.925-.245 2.24-.525v1.26zM45.92 2.135h-2.45V4.76h-1.505v1.925h1.505v5.775c0 1.96 1.4 2.905 3.255 2.87.42 0 .84-.07 1.26-.175V13.23c-.175.035-.63.07-.945.105-.63 0-1.12-.21-1.12-1.19v-5.46h2.03V4.76h-2.03V2.135zM48.965 25.445c.77 0 1.295-.63 1.295-1.68 0-1.05-.56-1.68-1.295-1.68-.56 0-.875.315-1.015.56V20.86h-.595v4.515h.595v-.525c.14.28.455.595 1.015.595zm-.175-.525c-.525 0-.875-.385-.875-1.19 0-.77.385-1.155.875-1.155s.875.28.875 1.155-.385 1.19-.875 1.19zm4.27-2.765L52.5 23.8c-.14.42-.175.56-.245.735-.07-.14-.105-.28-.315-.805l-.665-1.61h-.665l1.4 3.15-.175.455c-.105.245-.21.28-.455.28h-.63v.595h.665c.56 0 .805-.21 1.015-.805l1.26-3.64h-.63zm4.935 3.29c1.295 0 2.24-.945 2.24-2.345 0-1.4-.945-2.345-2.24-2.345S55.72 21.7 55.72 23.1c0 1.4.98 2.345 2.275 2.345zm0-.595c-.98 0-1.575-.77-1.575-1.75 0-1.015.595-1.75 1.575-1.75s1.575.77 1.575 1.75-.595 1.75-1.575 1.75zm5.46.49h.77l-1.54-1.89 1.435-1.33h-.77l-1.645 1.61V20.825h-.595v4.515h.595v-.945l.595-.56 1.155 1.505zm2.45 0h.77v-.525h-.665c-.21 0-.315-.105-.315-.315v-1.855h.875v-.49h-.875V21.14H65.1v1.015h-.735v.49h.735v1.925c0 .525.28.77.805.77zm2.31.105c.525 0 .805-.21 1.05-.56.035.28.14.49.595.49h.455v-.525H70c-.14 0-.175-.035-.175-.175v-1.47c0-.7-.42-1.12-1.295-1.12-.84 0-1.295.455-1.4.91l.595.175c.07-.245.28-.56.84-.56.455 0 .665.21.665.595v.105c-1.05.07-2.03.385-2.03 1.26-.035.525.385.875 1.015.875zm.14-.525c-.385 0-.56-.175-.56-.455 0-.525.63-.7 1.4-.77v.315c0 .665-.42.91-.84.91z" />
          </G>
        </Svg>
      </AuthLogoSVG>
    </Container>
  );
};

export default LoginScreen;
