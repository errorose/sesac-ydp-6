import React, { useState } from 'react';

export default function Alphabet() {
    // 배열 ex
    // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a']);

    // 배열 안에는 객체 형태 ex
    const [alphabet, setAlphabet] = useState([
        {
            id: 1,
            alpha: 'a',
        },
        {
            id: 2,
            alpha: 'p',
        },
        {
            id: 3,
            alpha: 'p',
        },
        {
            id: 4,
            alpha: 'l',
        },
        {
            id: 5,
            alpha: 'e',
        },
    ]);

    const [inputAlpha, setInputAlpha] = useState('');

    // 글자 추가.
    const addAlpha = () => {
        // Q. input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
        if (inputAlpha.trim().length === 0) {
            return;
        }

        // * concat
        // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.

        // ex)
        // let arr1 = [1, 2, 3];
        // let arr2 = [5, 6, 7];
        // let arr3 = arr1.concat(arr2);

        // console.log(arr3); // [1,2,3,5,6,7];
        const newAlpha = alphabet.concat({
            id: alphabet.length + 1,
            alpha: inputAlpha,
        });

        setAlphabet(newAlpha);
        setInputAlpha(''); // 입력 칸 초기화
    };

    // 글자 삭제
    const deleteAlpha = (targetId) => {
        console.log('targetId >>> ', targetId); // targetId : 삭제될 요소의 Id = value.id

        const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
        console.log(' newAlpha >>>> ', newAlpha);

        setAlphabet(newAlpha);
    };

    //  키보드 이벤트
    const handleKeyDown = (e) => {
        console.log(e);

        // if (e.code === 'Enter') {
        //     addAlpha();
        // }

        if (e.keyCode === 13) {
            addAlpha();
        }
    };
    return (
        <div>
            <h1>Map & Filter</h1>
            <ol>
                {/* 배열 ex */}
                {/* return 키워드 x, 중괄호 x */}
                {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))} */}

                {/* 배열 ex */}
                {/* return 키워드 o */}
                {/* {alphabet.map((value, idx) => {
                    return <li key={idx}>{value}</li>;
                })} */}

                {/* 객체 ex */}
                {alphabet.map((value) => (
                    <li key={value.id}>{value.alpha}</li>
                ))}
            </ol>

            {/* 알파벳 추가해보기 */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                // Q2) input에서 enter 키 누르면 추가되도록!
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <button onClick={addAlpha}>추가</button>

            {/* 알파벳 삭제해보기 */}
            <ol>
                {alphabet.map((value) => (
                    <li
                        key={value.id}
                        onDoubleClick={() => deleteAlpha(value.id)}
                    >
                        {value.alpha}
                    </li>
                ))}
            </ol>
        </div>
    );
}

/**
 * 1. deleteAlpha(value.id)의 의미
 * 
 * 해석 : deleteAlpha 함수를 즉시 실행하고, 그 결과값을 반환한다는 뜻.
 * 반환된 결과값이 onDoubleClick에 전달.
 * 삭제 로직일 뿐, 반환값이 없기 때문에 undefined일 확률이 높다. 
 * 
 * 즉시 실행: 컴포넌트가 랜더링 되는 시점에 deleteAlpha(value.id)가 바로 실행된다.
 * value.id라는 인자를 함수에 전달하면서 함수를 실행.
 * 
 * 2. () => deleteAlpha(value.id)의 의미
 * 해석 : deleteAlpha(value.id)라는 함수 호출을 나중에 실행하도록 준비해둔 "함수 참조"이다.
 * 
 * 나중에 실행: 컴포넌트가 렌더링될 때 이 함수는 실행되지 않고, 이벤트가 발생할 때만 실행된다.
 * value.id라는 인자가 이벤트가 발생할 때, deleteAlpha 함수에 전달되면서 실행된다.
 * 필요성: 인자를 넘겨주는 함수 호출을 연기하기 위해 화살표 함수, 즉 콜백 함수 형태로 작성해야 합니다.
 * 
 * 3. deleteAlpha 함수 호출에서 인자 없이 사용하면?
 * 해석 : 그냥 deleteAlpha 라고만 작성 할 수 있음.
 * 이 경우에도 함수는 참조로서 전달됨.
 * 인자를 넘겨줄 필요가 없으므로, 화살표 함수로 감쌀 필요도 없습니다.
 * 
 * ** 요약
 * deleteAlpha(value.id)는 즉시 실행을 의미.
 * () => deleteAlpha(value.id)는 이벤트 발생 시 실행을 의미, 인자를 넘겨줄 때 사용.
 * 인자가 필요 없으면: 그냥 함수 이름(deleteAlpha)만 전달.
 */