// [ Toolkit 사용 ]
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'; // CounterReducer를 임포트 // 가지고 올 때 변수 이름 마음대로
import isVisibleSlice from "./isVisibleSlice";

// #2. Store 생성
// - configureStore를 사용하여 스토어 생성.

// * configureStore *
// - Redux Toolkit에서 제공하는 함수로, 스토어를 더 쉽게 설정 할 수 있게 해줌.

const store = configureStore({
    reducer: {
        counter: counterReducer,
        isVisible: isVisibleSlice,
    },
});

export default store;