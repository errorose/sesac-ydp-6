import React, {useState} from 'react'

const HandlerEx2 = () => {
    const [color, setColor] = useState('black');
    const [txt, setTxt] = useState('검정색');
    
    
  return (
    <div>
        <h2 style={{color}}><span></span>글씨</h2>
        <button onClick={()=>{setColor('red')}}>빨간색</button>
        <button onClick={()=>{setColor('blue')}}>파란색</button>
    </div>
  )
}

export default HandlerEx2