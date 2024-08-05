import React, { useState } from 'react'

const CounterFunction = (props) => {
    const [number, setNumber] = useState(0);
    const onClickEnter = ()=>{
        setNumber(number + 1);
    }

    // console.log('CounterFunction props >> ', props); // {value: 'Plus 1'}
    const {value} = props;

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={onClickEnter}>{value}</button>
        <button onClick={onClickEnter}>Plus 1</button>
    </div>
  )
}

export default CounterFunction