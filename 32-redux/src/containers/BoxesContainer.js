// # App4.js!
// # 컨테이너 컴포넌트

import { useDispatch, useSelector } from 'react-redux';
import { Box1, Box2, Box3, Box4 } from "../App4";
import { minus, plus } from '../store/counterReducer';

export const Box1Container = () => {
    return <Box1 />;
}

export const Box2Container = () => {
    return <Box2 />;
}

export const Box3Container = () => {
    return <Box3 />;
}

export const Box4Container = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    return (
            <Box4 
                number={number} 
                onPlus={() => dispatch(plus())} 
                onMinus={() => dispatch(minus())}
            />
    );
}

// 컨테이너 컴포넌트 & 프레젠테이셔널 컴포넌트
// 리액트 애플리케이션에서 컴포넌트를 구성하고 관리하는 두 가지 주요 패턴.

/**
 * < 컨테이너 컴포넌트 >
 * - 데이터나 상태를 관리하고, 프레젠테이셔널 컴포넌트에 데이터를 전달하는 역할.
 * 
 * * 특징 *
 * - 상태 관리
 * - 비즈니스 로직 => 데이터 처리, 상테 업데이트, 이벤트 핸들링 등
 * - 프레젠테이셔널 컴포넌트에 데이터 전달 = 필요한 데이터를 Props로 전달.
 */

/**
 * < 프레젠테이셔널 컴포넌트 >
 * - 주로 UI 렌더링하는 데 집중, 데이터나 상태를 처리하지 않는다.
 * 
 * * 특징 *
 * - 상태 없음.
 * - UI 전용.
 * - 재사용성 = UI의 여러 부분에서 재사용 될 수 있도록 설계.
 */

/**
 * < 요약 >
 * 프레젠테이셔널 컴포넌트는 주로 UI를 담당하며 상태를 직접 관리하지 않는다.
 * - 주로 입력(props)만 받고 출력(UI)를 렌더링함.
 * 
 * 컨테이너 컴포넌트는 상태를 관리하거나 데이터 로직을 처리함.
 * - 프.젠 컴포넌트에 필요한 데이터를 전달.
 */