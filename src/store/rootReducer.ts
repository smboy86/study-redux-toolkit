import { combineReducers } from '@reduxjs/toolkit';

// import all reducers here
// import counterReducer from '../slices/counterSlice';
// import usersReducer from '../slices/usersSlice';
// import appReducer from '../slices/appSlice';

import testReducer from '../slices/testSlice';

// combine all reducers into a single state object
const rootReducer = combineReducers({
  test: testReducer,
  // counter: counterReducer,
  // users: usersReducer,
  // app: appReducer
});

// export root reducer's state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
