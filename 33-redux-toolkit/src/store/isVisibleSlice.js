import {createSlice} from '@reduxjs/toolkit';

// 슬라이스 정의
const isVisibleSlice = createSlice({
    name: 'isVisible',
    initialState: true,
    reducers: {
        // 상태를 반전시키는 액션
        toggle: (state) => {
            return !state; // 상태 반전
        }
    }
});

// 액션 생성자와 리듀서를 내보내기.
export const {toggle} = isVisibleSlice.actions;

export default isVisibleSlice.reducer;