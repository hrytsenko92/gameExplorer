import React, {useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import 'react-native-gesture-handler';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {themeColors} from '../../components/Theme';
// import {TextInput, TouchableOpacity, Text} from 'react-native';
// import SettingSVG from '../../components/SettingSVG';
// import SettingScreen from './SettingScreen/SettingScreen';
import SearchScreen from './SearchScreen/SearchScreen';
import GenresScreen from './GenresScreen/GenresScreen';
import PlatformScreen from './PlatformScreen/PlatformScreen';
import DevelopersScreen from './DevelopersScreen/DevelopersScreen';
import GameDetailScreen from './GameDetailScreen/GameDetailScreen';

const Container = styled.SafeAreaView`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 30px;
`;
const SearchWrapper = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 65px;
  margin-top: 30px;
`;
const SearchForm = styled.View`
  width: 90%;
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
const SearchInput = styled.TextInput`
  padding-left: 20px;
  font-size: 17px;
  width: 80%;
  height: 45px;
`;
const SearchSubmit = styled.TouchableOpacity`
  background-color: ${themeColors.bGray5};
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const SearchSubmitTitle = styled.Text`
  color: ${themeColors.bGray3};
  font-size: 20px;
  font-weight: 600;
`;
// const SettingItem = styled(TouchableOpacity)``;
const GenresButton = styled.TouchableOpacity`
  border-radius: 15px;
  border-color: ${themeColors.bGray5};
  border-width: 2px;
  width: 90%;
  height: 175px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const GenresButtonText = styled.Text`
  font-size: 45px;
  font-weight: 800;
  letter-spacing: 5px;
  color: ${themeColors.bGray3};
  opacity: 0.6;
`;
const PlatformButton = styled.TouchableOpacity`
  border-radius: 15px;
  border-color: ${themeColors.bGray5};
  border-width: 2px;
  width: 90%;
  height: 175px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const PlatformButtonText = styled.Text`
  font-size: 45px;
  font-weight: 800;
  letter-spacing: 5px;
  color: ${themeColors.bGray3};
  opacity: 0.6;
`;
const DevelopersButton = styled.TouchableOpacity`
  border-radius: 15px;
  border-color: ${themeColors.bGray5};
  border-width: 2px;
  width: 90%;
  height: 175px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const DevelopersButtonText = styled.Text`
  font-size: 45px;
  font-weight: 800;
  letter-spacing: 5px;
  color: ${themeColors.bGray3};
  opacity: 0.6;
`;
const LogOutButton = styled.TouchableOpacity`
  width: 30%;
  height: 30px;
  margin-top: 15px;
  border-color: ${themeColors.bGray5};
  border-width: 2px;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const LogOutButtonText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #cc4b4b;
`;

export type RootStackParamList = {
  RootMenu?: undefined;
  SearchScreen?: {searchString: string};
  // SettingScreen?: any;
  GenresScreen?: {genreTitle: string};
  PlatformScreen?: {platformTitle: string};
  DevelopersScreen?: undefined;
  GameDetailScreen?: {gameID: number};
};
const Stack = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList>;

const RootMenu = ({navigation}: Props) => {
  const [inputValue, setInputValue] = useState('');

  const {clearSession} = useAuth0();
  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return (
    <Container>
      <SearchWrapper>
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
        {/* <SettingItem>
          <SettingSVG width="75px" height="75px" />
        </SettingItem> */}
      </SearchWrapper>
      <GenresButton>
        <GenresButtonText>Genres</GenresButtonText>
      </GenresButton>
      <PlatformButton>
        <PlatformButtonText>Platforms</PlatformButtonText>
      </PlatformButton>
      <DevelopersButton>
        <DevelopersButtonText>Developers</DevelopersButtonText>
      </DevelopersButton>
      <LogOutButton onPress={onLogout}>
        <LogOutButtonText>Logout</LogOutButtonText>
      </LogOutButton>
    </Container>
  );
};

const RootScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RootMenu" component={RootMenu} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      {/* <Stack.Screen name="SettingScreen" component={SettingScreen} /> */}
      <Stack.Screen name="GenresScreen" component={GenresScreen} />
      <Stack.Screen name="PlatformScreen" component={PlatformScreen} />
      <Stack.Screen name="DevelopersScreen" component={DevelopersScreen} />
      <Stack.Screen name="GameDetailScreen" component={GameDetailScreen} />
    </Stack.Navigator>
  );
};
export default RootScreen;

{
  /* <Button
title="Go to Search"
onPress={() => navigation.navigate('SearchScreen')}
/> */
}
