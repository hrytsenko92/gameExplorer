import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Svg, {Path, G} from 'react-native-svg';

import React from 'react';

const SettingScreen = () => {
  return (
    <View>
      <Text>UserSetting</Text>
    </View>
  );
};

export default SettingScreen;

// import {useAuth0} from 'react-native-auth0';
// const {clearSession} = useAuth0();
// const onLogout = async () => {
//   try {
//     await clearSession();
//   } catch (e) {
//     console.log('Log out cancelled');
//   }
// };
// <Button onPress={onLogout} title={'Log Out'} />
