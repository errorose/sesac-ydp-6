import React, { useState } from 'react'
import Select from './Select';
import Result from './Result';
import Input from './Input';

// 부모 컴포넌트
// 상태 관리를 한번에 하는 방법.
export default function Prac() {
    const [data, setData] = useState({
        fruit: 'cat1',
        background: 'black',
        color: 'white',
        content: 'text',
    });
  return (
    <>
    {/* props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능. */}
        <div>
            <Select setData={setData}/>
        </div>
        <div>
            <Input setData={setData}/>
        </div>
        <div>
            <Result data={data}/>
        </div>
    </>
  )
}