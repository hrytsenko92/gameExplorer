import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'PlatformScreen'>;

const PlatformScreen = ({route, navigation}: Props) => {
  return (
    <View style={{
      backgroundColor: 'red',
      width:100,
      height:100,
    }}>
      <Text>Platform</Text>
      <Text>{route.params?.platformTitle}</Text>
    </View>
  );
};

export default PlatformScreen;
