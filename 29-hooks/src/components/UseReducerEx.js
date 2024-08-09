import React, { useReducer } from 'react';
// - 업데이트 로직을 컴포넌트 외부로 뺌!
// #1. 초기 상태값 정의
const initState = { value: 0 }; // 초기 상태 값.

// #2. reducer 함수 정의
// - 이 함수는 현재 상태와 액션을 받아 새로운 상태를 반환함.
const reducer = (prevState, action) => {
    // prevState = 현재 상태
    console.log('prevState >>>>> ', prevState); // {value: 0}

    // action = {type: xxx}
    console.log('action >>>>> ', action); // {type: 'INCREMENT'}
    console.log('action.type >>>>> ', action.type); // INCREMENT

    switch (action.type) {
        case 'INCREMENT':
            return { value: prevState.value + 1 };
        case 'DECREMENT':
            return { value: prevState.value - 1 };
        case 'RESET':
            return initState;
        default:
            return { value: prevState.value };
    }
};

export default function UseReducerEx() {
    // #3. useReducer 훅 사용.
    const [state, dispatch] = useReducer(reducer, initState);
    // state: 현재 상태
    // dispatch: 액션을 발생 시키는 함수. (state가 어떻게 변경되어야 하는지에 대한 힌트)
    // reducer: state를 업데이트 하는 함수

    console.log('state >>>>> ', state); // {value: 0}

    // #4. 액션 핸들러 함수 정의
    // - 이 함수들은 'dispatch'를 호출하여 액션을 발생 시킴.
    // { type: 'INCREMENT' } => 액션
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const reset = () => dispatch({ type: 'RESET' });
    return (
        <div>
            <h1>UseReducerEx</h1>
            <h2>{state.value}</h2>
            {/* #5. 컴포넌트 렌더링 */}
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

// 값 순서
// #3 > #4 > #2