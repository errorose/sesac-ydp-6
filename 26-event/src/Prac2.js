import React, { useState } from 'react'

// 상태 관리를 따로따로 하는 방법.
export default function Prac2() {
    const [fruit, setFruit] = useState('cat1.png');
    const [bgc, setBgc] = useState('red');
    const [color, setColor] = useState('black');
    const [text, setText] = useState('')

    function Typing(e) {
        setText(e.target.value);
    };

    const fruitChange = (e) => {
        setFruit(e.target.value)
    }

    const bgcChange = (e) => {
        setBgc(e.target.value);
    }

    const colorChange = (e) => {
        setColor(e.target.value);
    }
  return (
    <div>
        과일:
        <select onChange={fruitChange}>
            <option value="cat1.png">복숭아</option>
            <option value="cat2.png">사과</option>
            <option value="cat3.png">바나나</option>
        </select>
        배경색:
        <select onChange={bgcChange}>
            <option value="red">빨강</option>
            <option value="yellow">노랑</option>
            <option value="blue">파랑</option>
        </select>
        글자색:
        <select onChange={colorChange}>
            <option value="black">검정</option>
            <option value="red">빨강</option>
            <option value="yellow">노랑</option>
        </select>
        <div>
            내용: <input type="text" onChange={Typing}/>
        </div>
        <div>
            <img src={fruit} alt="" />
        </div>
        <div style={{ backgroundColor: bgc, color: color}}>
            {text}
        </div>
    </div>
  )
}