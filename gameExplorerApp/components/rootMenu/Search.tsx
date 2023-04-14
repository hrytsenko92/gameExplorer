import React, {useState} from 'react';
// import axios from 'axios';
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
  font-size: 17px;
  width: 80%;
  height: 45px;
`;
const SearchSubmit = styled.TouchableOpacity`
  background-color: ${themeColors.bGray5};
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const SearchSubmitTitle = styled.Text`
  color: ${themeColors.bGray3};
  font-size: 20px;
  font-weight: 600;
`;

const Search: React.FC<{navigation: any}> = ({navigation}) => {
  const [inputValue, setInputValue] = useState<string>('');
  // async function getGames() {
  //   let request = `https://api.rawg.io/api/games?key=bb2892ba5f2741ec9a2bbd0ea17a6633&search=${inputValue}`;
  //   try {
  //     const {data} = await axios.get(request, {
  //       headers: {Accept: 'application/json'},
  //     });
  //     navigation.navigate('GameList', {games: data.results});
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.log('error message: ', error.message);
  //       return error.message;
  //     } else {
  //       console.log('unexpected error: ', error);
  //       return 'An unexpected error occurred';
  //     }
  //   }
  // }
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
          <SearchSubmitTitle>Ok</SearchSubmitTitle>
        </SearchSubmit>
      </SearchForm>
    </SearchWrapper>
  );
};

export default Search;
