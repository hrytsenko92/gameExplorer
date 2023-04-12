import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Root';
import styled from 'styled-components/native';
import GameCard from '../../../components/GameCard';

const Container = styled.View`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const GameLi = styled.ScrollView``;

type Props = NativeStackScreenProps<RootStackParamList, 'GameList'>;
const GameList = ({route, navigation}: Props) => {
  return (
    <Container>
      <GameLi showsVerticalScrollIndicator={false}>
        {route.params?.games.map(item => (
          <GameCard key={item.id} game={item} navigation={navigation} />
        ))}
      </GameLi>
    </Container>
  );
};

export default GameList;
