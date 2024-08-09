import React, { useEffect, useState } from 'react';

// 자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
    const [input, setInput] = useState('');

    // #1. Mount 시점에 실행 (return 생략)
    useEffect(() => {
        console.log('컴포넌트 마운트!! 🔵');
    }, []);

    // #2. Mount 시점에 실행 (return)
    useEffect(() => {
        console.log('컴포넌트 마운트!! 🔵');
        return () => {
            // Unmount 시점에 실행
            console.log('컴포넌트 언마운트!! 🔴');
        };
    }, []);

    // #3. Mount or Update 시점에 실행 (의존성 배열 생략)
    useEffect(() => {
        console.log('컴포넌트 마운트!! 🔵 or 업데이트  🟢');
    });

    // 의존성 배열이 [] 빈 배열이므로 #1, #2는 랜더링 시 한번 만 실행.
    // 의존성 배열을 생략하는 의미는 "매 렌더링 마다 실행" 하겠다 라는 뜻. (상태 변경마다)

    // #4. input 상태가 업데이트 될 때 실행
    useEffect(() => {
        console.log(
            '마운트 🔵 or input 상태가 변경됨에 따라 컴포넌트 업데이트 🟠'
        );
    }, [input]);
    // input이 배열이 아니라도 의존성 배열에 추가할 수 있다.
    // 문자열이든 숫자든 상관없이, 이 값이 변경될 때마다 useEffect가 실행된다.
    return (
        <div style={{ color: 'white' }}>
            자식 컴포넌트
            <div>현재 number 값은 {number} 입니다.</div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}