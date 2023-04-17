import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Root';
import {GameDetailsType} from '../../../components/types/GameDetailType';
import {ScreenshotType} from '../../../components/types/screenshotType';
import dayjs from 'dayjs';
dayjs().format();

const GameDetailsContainer = styled.ScrollView``;
const GameImageWrapper = styled.View``;
const GameImage = styled.Image`
  width: 100%;
  height: 350px;
`;
const GameDetailsWrapper = styled.View`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0px 25px;
`;
const GameTitleWrapper = styled.View`
  background-color: yellow;
  width: 380px;
  height: 50px;
  position: absolute;
  top: -25px;
  left: 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const GameTitle = styled.Text`
  font-family: 'Electrolize';
  font-size: 25px;
  font-weight: 600;
`;
const GameInfoWrapper = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const GameRating = styled.View``;
const GameRatingText = styled.Text`
  font-family: 'Electrolize';
  font-size: 18px;
  font-weight: 400;
`;
const GamePlatforms = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const GamePlatformsText = styled.Text`
  font-family: 'Electrolize';
  font-size: 18px;
  font-weight: 400;
`;
const GameYear = styled.View``;
const GameYearText = styled.Text`
  font-family: 'Electrolize';
  font-size: 18px;
  font-weight: 400;
`;
const GameDescription = styled.Text`
  font-family: 'Electrolize';
  padding: 25px;
  text-align: justify;
`;
const GameScreenshots = styled.View`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const GameScreenshot = styled.Image`
  width: 100%;
  height: 300px;
`;

type Props = NativeStackScreenProps<RootStackParamList, 'GameDetails'>;
const GameDetails = ({route}: Props) => {
  const [game, setGame] = useState<GameDetailsType>();
  const [screenshots, setScreenshots] = useState<ScreenshotType[]>([]);
  async function getGames() {
    const request = `https://api.rawg.io/api/games/${route.params?.gameID}?key=bb2892ba5f2741ec9a2bbd0ea17a6633`;
    try {
      const {data} = await axios.get(request, {
        headers: {Accept: 'application/json'},
      });
      setGame(data);
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
  async function getScreenshots() {
    const request = `https://api.rawg.io/api/games/${route.params?.gameID}/screenshots?key=bb2892ba5f2741ec9a2bbd0ea17a6633`;
    try {
      const {data} = await axios.get(request, {
        headers: {Accept: 'application/json'},
      });
      setScreenshots(data.results);
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
  const getDate = () => {
    return dayjs(game?.released).format('MM YYYY');
  };
  const clearText = () => {
    return game?.description.replace(/<.*?>/g, '');
  };
  useEffect(() => {
    getGames();
    getScreenshots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <GameDetailsContainer>
      <GameImageWrapper>
        {game?.background_image !== undefined ? (
          <GameImage
            source={{
              uri: `${game.background_image}`,
            }}
          />
        ) : null}
      </GameImageWrapper>
      <GameDetailsWrapper>
        <GameTitleWrapper>
          <GameTitle>{game?.name}</GameTitle>
        </GameTitleWrapper>
        <GameInfoWrapper>
          <GameRating>
            <GameRatingText>Metacritic: {game?.metacritic}</GameRatingText>
          </GameRating>
          <GameYear>
            <GameYearText>Released: {getDate()}</GameYearText>
          </GameYear>
        </GameInfoWrapper>
        <GamePlatforms>
          {game?.platforms.slice(0, 7).map(item => (
            <GamePlatformsText key={item.platform.id}>
              {item.platform.name}
            </GamePlatformsText>
          ))}
        </GamePlatforms>
      </GameDetailsWrapper>
      <GameDescription>{clearText()}</GameDescription>
      <GameScreenshots>
        {screenshots.slice(0, 5).map(item => (
          <GameScreenshot
            key={item.id}
            source={{
              uri: `${item.image}`,
            }}
          />
        ))}
      </GameScreenshots>
    </GameDetailsContainer>
  );
};

export default GameDetails;
