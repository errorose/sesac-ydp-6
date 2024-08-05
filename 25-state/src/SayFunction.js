import React, { useState } from 'react'

const SayFunction = () => {
    console.log(useState('welcome!')); // 자료 잠시 저장하는 용도.

    // ** const [a, b] = useState(""); 형태
    // a: state에 저장할 자료.
    // b: state 변경을 도와주는 함수.
    // useState('') : 상태 초기값, (숫자, 문자, 배열, 객체 등 값의 형태는 자유로움)

    const [message, setMessage] = useState("welcome!");
    // message : 메세지 현재 상태
    // setMessage() : message state 값을 바꾸는 함수.

    // ex)
    // let message = "welcome"; 한 것과 같다.
    const onClickEnter = () => {
        setMessage('안녕하세요!');
    }

    const onClickLeave = () => {
        setMessage('안녕히가세요!');
    }

    const handleClick = () => {
        setMessage((currentMessage) => {
            return currentMessage === 'welcome!' ? "Hi" : "Bye";
        })
    }
  return (
    <div>
        {/* 
            -HTML : onclick="onClickEvent()" -> 문자열 형식의 호출문 등록
            -JS : addEventListner('click', onClickEvent) -> 괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생 했을 때 함수가 호출되도록 함.
            -React : onClick={onCLickEvent} -> JS와 동일.
        */}
        <h1>Function Component State</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={handleClick}>HI</button>
        <h1>{message}</h1>
    </div>
  )
}

export default SayFunction