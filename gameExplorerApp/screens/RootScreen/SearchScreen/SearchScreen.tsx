import React, {useEffect, useState} from 'react';
import axios from 'axios';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootScreen';
import styled from 'styled-components/native';
import GameCard from '../../../components/gameCard';
import {Game} from '../../../components/gameCardType';

const Container = styled.View`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
const GameList = styled.ScrollView``;

type Props = NativeStackScreenProps<RootStackParamList, 'SearchScreen'>;
const SearchScreen = ({route, navigation}: Props) => {
  const [games, setGames] = useState<Game[]>([]);
  async function getGames() {
    let request = `https://api.rawg.io/api/games?key=bb2892ba5f2741ec9a2bbd0ea17a6633&search=${route.params?.searchString}`;
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
    getGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <GameList showsVerticalScrollIndicator={false}>
        {games.map(item => (
          <GameCard game={item} navigation={navigation} />
        ))}
      </GameList>
    </Container>
  );
};

export default SearchScreen;
