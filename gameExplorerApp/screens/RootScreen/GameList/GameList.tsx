import React, {useState, useEffect} from 'react';
import axios from 'axios';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Root';
import styled from 'styled-components/native';
import GameCard from '../../../components/GameCard';
import {Game} from '../../../components/types/gameCardType';

const Container = styled.SafeAreaView``;
const AllList = styled.FlatList``;

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
      {games.length > 0 ? (
        <AllList
          data={games}
          renderItem={({item}) => (
            <GameCard game={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      ) : null}
    </Container>
  );
};

export default GameList;
