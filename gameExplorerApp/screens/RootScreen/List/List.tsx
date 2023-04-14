import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Root';
import {ListType} from '../../../components/listType';
import ListBtn from './ListBtn';

const Container = styled.View`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const AllList = styled.ScrollView``;

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

const List = ({route, navigation}: Props) => {
  const [dataList, setDataList] = useState<ListType[]>([]);
  async function getData(request: string) {
    try {
      const {data} = await axios.get(request, {
        headers: {Accept: 'application/json'},
      });
      setDataList(data.results);
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
    const str = route.params?.title.toLowerCase();
    getData(
      `https://api.rawg.io/api/${str}?key=bb2892ba5f2741ec9a2bbd0ea17a6633&page_size=25`,
    );
  }, [route.params?.title]);
  return (
    <Container>
      <AllList>
        {route.params?.title
          ? dataList.map(item => (
              <ListBtn
                key={item.id}
                navigation={navigation}
                title={item.name}
                target={route.params?.title}
                id={item.id}
                backgroundImage={item.image_background}
              />
            ))
          : null}
      </AllList>
    </Container>
  );
};

export default List;
