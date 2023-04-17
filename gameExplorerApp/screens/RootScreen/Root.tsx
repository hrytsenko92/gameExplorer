import React from 'react';
import {useAuth0} from 'react-native-auth0';
import 'react-native-gesture-handler';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Search from '../../components/rootMenu/Search';
import MenuBtn from '../../components/rootMenu/MenuBtn';
import List from './List/List';
import GameList from './GameList/GameList';
import GameDetails from './GameDetails/GameDetails';

const Container = styled.SafeAreaView`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 40px;
`;
const LogOutButton = styled.TouchableOpacity`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogOutButtonText = styled.Text`
  font-family: 'Electrolize';
  font-size: 21px;
  font-weight: 700;
  color: #cc4b4b;
`;

export type RootStackParamList = {
  Menu: undefined;
  List: {title: string};
  GameList: {target: string; value?: string; id?: number};
  GameDetails: {gameID: number};
};
const Stack = createStackNavigator<RootStackParamList>();
type Props = StackScreenProps<RootStackParamList>;

const Menu = ({navigation}: Props) => {
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
      <Search navigation={navigation} />
      <MenuBtn title="Genres" navigation={navigation} />
      <MenuBtn title="Platforms" navigation={navigation} />
      <MenuBtn title="Developers" navigation={navigation} />
      <LogOutButton onPress={onLogout}>
        <LogOutButtonText>Logout</LogOutButtonText>
      </LogOutButton>
    </Container>
  );
};

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Menu"
        component={Menu}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="List"
        component={List}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="GameList"
        component={GameList}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="GameDetails"
        component={GameDetails}
      />
    </Stack.Navigator>
  );
};
export default Root;
