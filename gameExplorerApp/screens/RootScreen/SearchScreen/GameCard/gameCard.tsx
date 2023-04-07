import React, {useEffect, useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Button,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import styled from 'styled-components/native';
import {themeColors} from '../../../../assets/Theme';
import {Game} from '../../../../assets/gameCardType';
import IOS from '../../../../assets/IOS';
import Android from '../../../../assets/Android';
import PC from '../../../../assets/PC';
import Ps from '../../../../assets/Ps';
import Xbox from '../../../../assets/Xbox';
import Nintendo from '../../../../assets/Nintendo';

const Container = styled.View`
  border: 1px solid blue; // delete
  width: 375px;
  height: 275px;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CardImgWrapper = styled.View`
  background-color: transparent;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 375px;
  height: 175px;
  overflow: hidden;
`;
const CardImg = styled.Image`
  width: 375px;
  height: 175px;
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
  padding: 30px 10px 10px;
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
const DetailsPlatformsAbdDewelopers = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
const DetailPlatformWrapper = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const DetailPlatformItem = styled.TouchableOpacity`
  /* font-size: 18px;  */
  width: 20px;
  height: 20px;
`;
const DetailDeveloperWrapper = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
`;
const DetailDeveloperItem = styled.Text``;

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
          <CardTitle>Stalker 2</CardTitle>
        </CardTitleWrapper>
        <DetailsWrapper>
          <DetailsGenreWrapper>
            {game.genres.map(item => (
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
          <DetailsPlatformsAbdDewelopers>



            <DetailPlatformWrapper>
               {game.platforms.map(item => (
              <DetailPlatformItem onPress={() => navigation.navigate('PlatformScreen', {platformTitle: item.platform.name})}>
                <Android  width="10px" height="10px" fill='red'/>
                <Text>android</Text>
              </DetailPlatformItem>
                // title={`${item.platform.name}`}
                
              
            ))}



              {/* <DetailPlatformItem>xbox</DetailPlatformItem> */}




            </DetailPlatformWrapper>
            <DetailDeveloperWrapper>
              <DetailDeveloperItem>gsc</DetailDeveloperItem>
              <DetailDeveloperItem>microsoft</DetailDeveloperItem>
            </DetailDeveloperWrapper>
          </DetailsPlatformsAbdDewelopers>
        </DetailsWrapper>
      </CardDetails>
    </Container>
  );
};

export default GameCard;

  //  <DetailPlatformWrapper>
  //              {game.platforms.map(item => (
  //             <DetailPlatformItem
  //               title={`${item.platform.name}`}
  //               onPress={() =>
  //                 navigation.navigate('GenresScreen', {
  //                   platformTitle: item.platform.name,
  //                 })
  //               }
  //             />
  //           ))}