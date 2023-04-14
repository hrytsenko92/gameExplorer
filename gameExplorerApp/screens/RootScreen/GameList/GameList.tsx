import React, {useState, useEffect} from 'react';
import axios from 'axios';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Root';
import styled from 'styled-components/native';
import GameCard from '../../../components/GameCard';
import {Game} from '../../../components/gameCardType';

const Container = styled.View`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const AllList = styled.ScrollView``;

type Props = NativeStackScreenProps<RootStackParamList, 'GameList'>;
const GameList = ({route, navigation}: Props) => {
  const [games, setGames] = useState<Game[]>([]);
  async function getGames(request: string) {
    try {
      const {data} = await axios.get(request, {
        headers: {Accept: 'application/json'},
      });
      setGames(data.results);
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

  useEffect(() => {
    route.params?.target === 'Search'
      ? getGames(
          `https://api.rawg.io/api/games?key=bb2892ba5f2741ec9a2bbd0ea17a6633&search=${route.params.value}`,
        )
      : route.params?.target === 'Genres'
      ? getGames(
          `https://api.rawg.io/api/games?key=bb2892ba5f2741ec9a2bbd0ea17a6633&genres=${route.params.id}`,
        )
      : route.params?.target === 'Platforms'
      ? getGames(
          `https://api.rawg.io/api/games?key=bb2892ba5f2741ec9a2bbd0ea17a6633&platforms=${route.params.id}`,
        )
      : route.params?.target === 'Developers'
      ? getGames(
          `https://api.rawg.io/api/games?key=bb2892ba5f2741ec9a2bbd0ea17a6633&developers=${route.params.id}`,
        )
      : null;
  }, [route.params]);

  return (
    <Container>
      <AllList showsVerticalScrollIndicator={false}>
        {games.map(item => (
          <GameCard key={item.id} game={item} navigation={navigation} />
        ))}
      </AllList>
    </Container>
  );
};

export default GameList;
