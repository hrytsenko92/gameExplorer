import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {TextInput, TouchableOpacity, Button, Text} from 'react-native';
import styled from 'styled-components/native';
import SettingSVG from '../../components/SettingSVG';
import SearchScreen from './SearchScreen/SearchScreen';
import SettingScreen from './SettingScreen/SettingScreen';
import GenresScreen from './GenresScreen/GenresScreen';
import PlatformScreen from './PlatformScreen/PlatformScreen';
import DevelopersScreen from './DevelopersScreen/DevelopersScreen';
import {themeColors} from '../../components/Theme';

const Container = styled.SafeAreaView`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const SearchAndSetting = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 65px;
`;
const SearchForm = styled.View`
  width: 70%;
  height: 65px;
  border-radius: 15px;
  padding-right: 7px;
  border-color: ${themeColors.bGray5};
  border-width: 2px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput = styled(TextInput)`
  padding-left: 20px;
  font-size: 17px;
  width: 80%;
  height: 45px;
`;
const SearchSubmit = styled(TouchableOpacity)`
  background-color: #adb4bf;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const SearchSubmitTitle = styled(Text)`
  color: #737b8b;
  font-size: 20px;
  font-weight: 600;
`;
const SettingItem = styled(TouchableOpacity)``;

export type RootStackParamList = {
  RootMenu?: undefined;
  SearchScreen?: {searchString: string};
  SettingScreen?: any;
  GenresScreen?: {genreTitle: string};
  PlatformScreen?: {platformTitle: string};
  DevelopersScreen?: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList>;

const RootMenu = ({navigation}: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Container>
      <SearchAndSetting>
        <SearchForm>
          <SearchInput
            placeholder="Enter game title"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <SearchSubmit
            onPress={() =>
              navigation.navigate('SearchScreen', {searchString: inputValue})
            }>
            <SearchSubmitTitle>Ok</SearchSubmitTitle>
          </SearchSubmit>
        </SearchForm>
        <SettingItem>
          <SettingSVG width="75px" height="75px" />
        </SettingItem>
      </SearchAndSetting>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('SearchScreen')}
      />
    </Container>
  );
};

const RootScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RootMenu" component={RootMenu} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="GenresScreen" component={GenresScreen} />
      <Stack.Screen name="PlatformScreen" component={PlatformScreen} />
      <Stack.Screen name="DevelopersScreen" component={DevelopersScreen} />
    </Stack.Navigator>
  );
};
export default RootScreen;
