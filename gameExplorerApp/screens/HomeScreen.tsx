import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const HomeScreen = () => {
  const {clearSession} = useAuth0();

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };
  return (
    <View
      style={{
        padding: 150,
      }}>
      <Text>Home screen test</Text>

      <Button onPress={onLogout} title={'Log Out'} />
    </View>
  );
};

export default HomeScreen;
