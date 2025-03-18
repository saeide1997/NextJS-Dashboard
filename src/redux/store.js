// store.js
import { configureStore } from '@reduxjs/toolkit';

// یک slice ساده برای مدیریت وضعیت
const initialState = { count: 0 };

const counterSlice = {
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
};

const store = configureStore({
  reducer: {
    counter: (state = initialState, action) => {
      switch (action.type) {
        case 'counter/increment':
          return { ...state, count: state.count + 1 };
        default:
          return state;
      }
    },
  },
});

export default store;
