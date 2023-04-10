import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'GenresScreen'>;

const GenresScreen = ({route, navigation}: Props) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
      }}>
      <Text>{route.params?.genreTitle}</Text>
    </View>
  );
};

export default GenresScreen;
