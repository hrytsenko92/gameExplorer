import React from 'react';
import styled from 'styled-components/native';
import {themeColors} from '../Theme';

const Button = styled.TouchableOpacity`
  border-radius: 15px;
  border-color: ${themeColors.bGray5};
  border-width: 2px;
  width: 90%;
  height: 175px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-family: 'Electrolize';
  font-size: 45px;
  font-weight: 500;
  letter-spacing: 5px;
  color: ${themeColors.yellow};
`;

interface UserProps {
  title: string;
}

const MenuBtn: React.FC<UserProps & {navigation: any}> = ({
  title,
  navigation,
}) => {
  return (
    <Button
      onPress={() =>
        navigation.navigate('List', {
          title: title,
        })
      }>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default MenuBtn;
