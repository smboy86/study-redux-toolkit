import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

// 2. 상태 수정하기
import { setText } from '../slices/testSlice';
const Home = () => {
  // 1. 상태값 조회하기
  const { greeting } = useSelector((state: RootState) => state.test);
  const dispatch = useDispatch();

  function setGreeting() {
    dispatch(setText({ gretting: '이렇게 하면 바뀌나!!' }));
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{greeting}</Text>
      <Pressable
        style={{ padding: 20, borderWidth: 1 }}
        onLongPress={setGreeting}>
        <Text>문자를 바꿔보자!</Text>
      </Pressable>
    </View>
  );
};

export default Home;
