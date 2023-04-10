import React from 'react';
import styled from 'styled-components/native';
import {themeColors} from './Theme';
import {Game} from './gameCardType';
import IOS from './IOS';
import Android from './Android';
import PC from './PC';
import Ps from './Ps';
import Xbox from './Xbox';
import Nintendo from './Nintendo';
import OthersPlatforms from './OthersPlatforms';

const Container = styled.View`
  border: 1px solid blue; // delete
  width: 95%;
  height: 350px;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CardImgWrapper = styled.View`
  background-color: transparent;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 225px;
  overflow: hidden;
`;
const CardImg = styled.Image`
  width: 375px;
  height: 225px;
  object-fit: cover;
  object-position: top;
`;
const CardDetails = styled.View`
  position: relative;
`;
const CardTitleWrapper = styled.View`
  width: 300px;
  height: 50px;
  position: absolute;
  left: 0px;
  top: -25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: ${themeColors.yellow};
`;
const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  text-overflow: clip; // ???
  color: ${themeColors.bGray4};
`;
const DetailsWrapper = styled.View`
  padding: 35px 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;
const DetailsGenreWrapper = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const DetailsGenreItem = styled.Button`
  font-size: 18px; // button to screen genre/{genre}
`;
const DetailPlatformWrapper = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const DetailPlatformItem = styled.TouchableOpacity`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const DetailPlatformItemText = styled.Text`
  font-size: 15px;
  font-weight: 500;
`;

interface UserProps {
  game: Game;
}

const GameCard: React.FC<UserProps & {navigation: any}> = ({
  game,
  navigation,
}) => {
  return (
    <Container>
      <CardImgWrapper>
        <CardImg
          source={{
            uri: `${game.background_image}`,
          }}
        />
      </CardImgWrapper>
      <CardDetails>
        <CardTitleWrapper>
          <CardTitle>{game.name}</CardTitle>
        </CardTitleWrapper>
        <DetailsWrapper>
          <DetailsGenreWrapper>
            {game.genres.slice(0, 3).map(item => (
              <DetailsGenreItem
                title={`${item.name}`}
                onPress={() =>
                  navigation.navigate('GenresScreen', {
                    genreTitle: item.name,
                  })
                }
              />
            ))}
          </DetailsGenreWrapper>
          <DetailPlatformWrapper>
            {game.platforms.slice(0, 3).map(item => (
              <DetailPlatformItem
                onPress={() =>
                  navigation.navigate('PlatformScreen', {
                    platformTitle: item.platform.name,
                  })
                }>
                {item.platform.name == 'PC' ? (
                  <PC width="20px" height="20px" fill={themeColors.yellow} />
                ) : item.platform.name.includes('PlayStation') ? (
                  <Ps width="20px" height="20px" fill={themeColors.yellow} />
                ) : item.platform.name.includes('Xbox') ? (
                  <Xbox width="20px" height="20px" fill={themeColors.yellow} />
                ) : item.platform.name.includes('iOS') ? (
                  <IOS width="20px" height="20px" fill={themeColors.yellow} />
                ) : item.platform.name.includes('Android') ? (
                  <Android
                    width="20px"
                    height="20px"
                    fill={themeColors.yellow}
                  />
                ) : item.platform.name.includes('Nintendo') ? (
                  <Nintendo
                    width="20px"
                    height="20px"
                    fill={themeColors.yellow}
                  />
                ) : (
                  <OthersPlatforms
                    width="20px"
                    height="20px"
                    fill={themeColors.yellow}
                  />
                )}
                <DetailPlatformItemText>
                  {item.platform.name}
                </DetailPlatformItemText>
              </DetailPlatformItem>
            ))}
          </DetailPlatformWrapper>
        </DetailsWrapper>
      </CardDetails>
    </Container>
  );
};

export default GameCard;
