import React,{ useEffect, useState} from "react";
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
import IOS from '../../../../assets/IOS';
import Android from '../../../../assets/Android';
import PC from '../../../../assets/PC';
import Ps from '../../../../assets/Ps';
import Xbox from '../../../../assets/Xbox';
import Nintendo from '../../../../assets/Nintendo';

const Container = styled.View`
  border: 1px solid blue;
  width: 375px;
  height: 275px;
  border-radius: 10px;
`;
const CardImgWrapper = styled.View`
  overflow: hidden;
`;
const CardImg = styled.Image`
  width: 375px;
  height: 175px;
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
  background-color: red;
`;
const CardTitle = styled.Text`
  font-size: 20px;
  margin-left: 20px;
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
const DetailsGenreItem = styled.Text`
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
const DetailPlatformItem = styled.Text`
  font-size: 18px; // button to screen platform/{platform}
`;
const DetailDeveloperWrapper = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
`;
const DetailDeveloperItem = styled.Text``;



const GameCard = () => {
  return (
    <Container>
      <CardImgWrapper>
        <CardImg
          source={{
            uri: 'https://media.rawg.io/media/resize/420/-/screenshots/c68/c689774c446800bad227773a0337a69c.jpg',
          }}
        />
      </CardImgWrapper>
      <CardDetails>
        <CardTitleWrapper>
          <CardTitle>Stalker 2</CardTitle>
        </CardTitleWrapper>
        <DetailsWrapper>
          <DetailsGenreWrapper>
            <DetailsGenreItem>action map</DetailsGenreItem>
            <DetailsGenreItem>action map</DetailsGenreItem>
          </DetailsGenreWrapper>
          <DetailsPlatformsAbdDewelopers>
            <DetailPlatformWrapper>
              <DetailPlatformItem>xbox</DetailPlatformItem>
              <DetailPlatformItem>pc</DetailPlatformItem>
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



