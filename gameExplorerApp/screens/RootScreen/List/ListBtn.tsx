import React from 'react';
import styled from 'styled-components/native';
import {themeColors} from '../../../components/Theme';

const Button = styled.TouchableOpacity`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
  width: 390px;
  height: 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const ButtonBackground = styled.ImageBackground`
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0.9;
`;
const ButtonText = styled.Text`
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 5px;
  color: ${themeColors.yellow};
`;

interface UserProps {
  title: string;
  target: string;
  id: number;
  backgroundImage?: string;
}

const ListBtn: React.FC<UserProps & {navigation: any}> = ({
  title,
  target,
  id,
  navigation,
  backgroundImage,
}) => {
  return (
    <Button
      onPress={() =>
        navigation.navigate('GameList', {
          title: title,
          target,
          id: id,
        })
      }>
      {backgroundImage !== undefined ? (
        <ButtonBackground
          source={{uri: `${backgroundImage}`}}
          resizeMode="cover"
        />
      ) : null}
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default ListBtn;
