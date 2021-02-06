// 'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// service
import DummyService from '../api/dummyAPI';
// types
import { AppThunk } from '../store';
import { User, UsersState, TestState } from '../types';

const initialState: TestState = {
  greeting: 'init 안녕~~~',
};

const test = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<{ gretting: string }>) {
      const { gretting } = action.payload;
      state.greeting = gretting;
    },
  },
});

export const { setText } = test.actions;
export default test.reducer;

/*
const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state) {
      state.inProgress = true;
      state.error = null;
    },
    getUsersSuccess(state, action: PayloadAction<{ users: User[] }>) {
      const { users } = action.payload;
      state.inProgress = false;
      state.users = users;
    },
    getUsersFailure(state, action: PayloadAction<string>) {
      state.inProgress = false;
      state.error = action.payload;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailure } = users.actions;

export default users.reducer;

// 썽크는 슬라이스로 안만들고 간단히 해부리네?? 와이??
export const fetchUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUsers());
    const users = await DummyService.getUsers();
    dispatch(getUsersSuccess({ users }));
  } catch (ex) {
    dispatch(getUsersFailure('error:' + ex));
  }
};
*/
