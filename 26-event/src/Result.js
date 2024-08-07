import React from 'react'

export default function Result( {data}) {
    const { fruit, background, color, content} = data;
  return (
    <>
        <img src={`${fruit}.png`} alt={fruit} width={100} height={100} />
        {/* text */}
        <div style={{backgroundColor: background, color: color}}>
            {content}
        </div>
    </>
  )
}