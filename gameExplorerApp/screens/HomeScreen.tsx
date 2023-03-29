import React from 'react';
import {useAuth0} from 'react-native-auth0';
import styled from 'styled-components/native';
import Genres from './GenresScreen/Genres';
import Platform from './PlatformScreen/Platform';
import Publishers from './PublishersScreen/Publishers';
import Search from './Search/Search';
import UserSetting from './UserSetting/UserSetting';

const Container = styled.SafeAreaView``;
const SearchAndSetting = styled.View``;
const SearchItem = styled(Search)``;
const SettingItem = styled(UserSetting)``;
const Main = styled.View``;
const GenresItem = styled(Genres)``;
const PlatformItem = styled(Platform)``;
const PublishersItem = styled(Publishers)``;

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
    <Container>
      <SearchAndSetting>
        <SearchItem />
        <SettingItem />
      </SearchAndSetting>
      <Main>
        <GenresItem />
        <PlatformItem />
        <PublishersItem />
      </Main>
    </Container>
  );
};

export default HomeScreen;

{/* <Button onPress={onLogout} title={'Log Out'} /> */}
