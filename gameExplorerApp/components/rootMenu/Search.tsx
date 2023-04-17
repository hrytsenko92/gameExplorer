import React, {useState} from 'react';
import styled from 'styled-components/native';
import {themeColors} from '../Theme';

const SearchWrapper = styled.View`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 65px;
  margin-top: 30px;
`;
const SearchForm = styled.View`
  width: 90%;
  height: 65px;
  border-radius: 15px;
  padding-right: 7px;
  border-color: ${themeColors.bGray5};
  border-width: 2px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput = styled.TextInput`
  padding-left: 20px;
  font-family: 'Electrolize';
  font-size: 17px;
  width: 80%;
  height: 45px;
`;
const SearchSubmit = styled.TouchableOpacity`
  background-color: ${themeColors.yellow};
  width: 70px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const SearchSubmitTitle = styled.Text`
  color: ${themeColors.bGray3};
  font-family: 'Electrolize';
  font-size: 20px;
  font-weight: 700;
`;

const Search: React.FC<{navigation: any}> = ({navigation}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const sendProp = () => {
    navigation.navigate('GameList', {
      target: 'Search',
      value: inputValue,
    });
  };
  return (
    <SearchWrapper>
      <SearchForm>
        <SearchInput
          placeholder="Enter game title"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <SearchSubmit onPress={sendProp}>
          <SearchSubmitTitle>Go</SearchSubmitTitle>
        </SearchSubmit>
      </SearchForm>
    </SearchWrapper>
  );
};

export default Search;
