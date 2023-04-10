import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'GameDetailScreen'>;

const GameDetailScreen = ({route, navigation}: Props) => {
  console.log(route);
  console.log(navigation);
  return (
    <View>
      <Text>GameDetail</Text>
      <Text>{route.params?.gameID}</Text>
    </View>
  );
};

export default GameDetailScreen;
