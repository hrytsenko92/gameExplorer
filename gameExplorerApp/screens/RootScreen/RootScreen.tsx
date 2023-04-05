import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import {TextInput, TouchableOpacity, Button, Text} from 'react-native';
import styled from 'styled-components/native';
import Svg, {Path, G} from 'react-native-svg';
import SearchScreen from './SearchScreen/SearchScreen';
import SettingScreen from './SettingScreen/SettingScreen';
import GenresScreen from './GenresScreen/GenresScreen';
import PlatformScreen from './PlatformScreen/PlatformScreen';
import DevelopersScreen from './DevelopersScreen/DevelopersScreen';

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
  border-color: #adb4bf;
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
  GenresScreen?: undefined;
  PlatformScreen?: undefined;
  DevelopersScreen?: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList>;

const RootMenu = ({route, navigation}: Props) => {
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
          <SearchSubmit onPress={() => navigation.navigate('SearchScreen',{searchString: inputValue})}>
            <SearchSubmitTitle>Ok</SearchSubmitTitle>
          </SearchSubmit>
        </SearchForm>
        <SettingItem>
          <Svg
            style={{
              width: '75px',
              height: '75px',
            }}
            viewBox="0 0 24 24"
            fill="none">
            <G id="SVGRepo_bgCarrier" stroke-width="0" />
            <G
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <G id="SVGRepo_iconCarrier">
              <Path
                opacity="0.4"
                d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
                fill="#737b8b"
              />
              <Path
                d="M18.4406 21.66C17.7806 21.89 17.0206 22 16.1906 22H7.81055C6.98055 22 6.22055 21.89 5.56055 21.66C5.91055 19.02 8.67055 16.97 12.0005 16.97C15.3305 16.97 18.0906 19.02 18.4406 21.66Z"
                fill="#ffc52f"
              />
              <Path
                d="M15.5799 11.58C15.5799 13.56 13.9799 15.17 11.9999 15.17C10.0199 15.17 8.41992 13.56 8.41992 11.58C8.41992 9.60002 10.0199 8 11.9999 8C13.9799 8 15.5799 9.60002 15.5799 11.58Z"
                fill="#5a6271"
              />
            </G>
          </Svg>
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

