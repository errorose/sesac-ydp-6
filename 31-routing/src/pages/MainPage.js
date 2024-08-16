import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('searchParams >>>> ', searchParams);

    console.log(searchParams.get('mode')); // "Dark" or null

    return (
        // #1. 클래스명 2개
        // <div className={['Main', searchParams.get('mode')].join(' ')}>
        // #2. 클래스명 2개
        <div className={`Main ${searchParams.get('mode') || ''}`}>
            <h1>MainPage</h1>
            <button
                onClick={() => {
                    // 'mode' 쿼리 파라미터를 'Dark'로 설정하여 URL을 업데이트.
                    setSearchParams({ mode: 'Dark' });
                }}
            >
                Dark Mode
            </button>
        </div>
    );
}

/**
 * 코드 리뷰
 * useSerachParams() 훅은 현재 URL의 쿼리 파라미터를 읽고 수정할 수 있는 기능을 제공.
 *
 * searchParams는 URLSearchParams 객체로, 현재 URL의 쿼리 파라미터를 나타냅니다.
 * setSearchParams는 쿼리 파라미터를 수정하는데 사용되는 함수.
 *
 * searchParams.get('mode')는 현재 URL의 쿼리 스트링에서 mode라는 이름의 파라미터 값을 가져옵니다.
 *
 * 버튼 클릭 이벤트 핸들러는 setSearchParams({ mode: 'Dark' })를 호출하여
 * 쿼리 스트링의 mode 파라미터를 'Dark'로 설정함.
 * 이로 인해 URL이 업데이트 되며, 페이지가 새로고침 되지 않고 URL의 쿼리 파라미터가 변경됩니다.
 */