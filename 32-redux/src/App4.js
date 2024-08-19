// 프레젠테이션 컴포넌트

import React from 'react';
import { Box1Container, Box2Container, Box3Container, Box4Container } from './containers/BoxesContainer';
import { useSelector } from 'react-redux';

export default function App4() {
    const number = useSelector((state) => state.counter.number);
  return (
    <div className='App'>
        <h1>React Redux Ex4</h1>
        <h2>컨테이너 & 프레젠테이션 패턴</h2>
        <h2>number: {number}</h2>
        <Box1Container />
    </div>
  )
}

export const Box1 = () => {
    return (
        <div className='Box'>
            <h2>Box1</h2>
            <Box2Container />
        </div>
    )
}

export const Box2 = () => {
    return (
        <div className='Box2'>
            <h2>Box2</h2>
            <Box3Container />
        </div>
    )
}

export const Box3 = () => {
    return (
        <div className='Box3'>
            <h2>Box3</h2>
            <Box4Container />
        </div>
    )
}

export const Box4 = ({number, onPlus, onMinus}) => {
    return (
        <div className='Box4'>
            <h2>Box4 : {number}</h2>

            <button onClick={onPlus}>Plus</button>
            <button onClick={onMinus}>Minus</button>
        </div>
    )
}

/**
 * App2.js 와 App4.js 차이.
 *
 * App2.js
 * 간단한 구조: 모든 컴포넌트가 동일한 파일에 정의되어 있고, 리덕스 상태와 액션이 특정 컴포넌트에만 연결되어 있다.
 * 단일 책임 원칙 부족: 상태 관리와 UI 렌더링이 혼합되어 있으며, 상태와 액션을 처리하는 로직이 컴포넌트 내부에 포함되어 있다.
 *
 * App4.js
 * 구조적 분리: 컨테이너 컴포넌트와 프레젠테이셔널 컴포넌트가 분리되어있음.
 * 단일 책임 원칙: Box4Container는 상태 관리와 액션 디스패치를 담당하고, Box4는 UI 렌더링만 담당.
 *
 * ** 결론 **
 * App2.js는 리덕스 상태와 액션을 직접 컴포넌트에서 관리하는 방식,
 * 코드가 단순하지만 상태와 액션 처리가 컴포넌트 내부에 묶여 있어 관리가 어려울 수 있다.
 *
 * App4.js는 컨테이너/프레젠테이셔널 컴포넌트 패턴을 사용하여 상태 관리와 UI 렌더링을 분리하고,
 * 코드의 책임을 명확히 하여 유지보수성과 확장성을 높힘.
 */
