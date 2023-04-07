import React, {useEffect, useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Button,
  Text,
  View,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootScreen';
import styled from 'styled-components/native';
import GameCard from './GameCard/gameCard';
import { Game } from '../../../assets/gameCardType';

const Container = styled.View`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
const TitleWrapper = styled.View`
  padding: 10px 10px;
`;
const Title = styled.Text`
  font-size: 20px;
`;
const GameList = styled.ScrollView``;

type Props = NativeStackScreenProps<RootStackParamList, 'SearchScreen'>;
const SearchScreen = ({route, navigation}: Props) => {
  const [games, setGames] = useState<Game[]>([]);
  function filterGamesByKeyword(games: Game[], keyword: string): void {
  const result = games.filter((game) => game.name.toLowerCase().includes(keyword.toLowerCase()));
  setGames(result)
}
  async function getGames() {
    let request = `https://api.rawg.io/api/games?key=bb2892ba5f2741ec9a2bbd0ea17a6633&search=${route.params?.searchString}`;
    try {
      const {data} = await axios.get(request, {
        headers: {Accept: 'application/json'},
      });
      route.params?.searchString ? filterGamesByKeyword(data.results, route.params?.searchString): null
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  useEffect(()=>{
    getGames()
  },[])
  return (
    <Container>
      <TitleWrapper>
        <Title>Result: {games.length}</Title>
      </TitleWrapper>
      <GameList showsVerticalScrollIndicator={false}>
        {games.map((item) => 
          <GameCard game={item} navigation={navigation}/>
        )}
      </GameList>
    </Container>
  );
};

export default SearchScreen;
// <Text>{route.params?.searchString}</Text>
