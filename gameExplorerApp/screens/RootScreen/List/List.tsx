import {View, Text} from 'react-native';
// import styled from 'styled-components/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Root';
import React from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

const List = ({route, navigation}: Props) => {
  console.log(route);
  console.log(navigation);
  return (
    <View>
      <Text>List</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
};

export default List;

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
