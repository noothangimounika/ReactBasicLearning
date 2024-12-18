import React, { useState } from 'react'

const CouterUseStateHook = () => {

    const [count,setCount]=useState(0);

  return (
    <div className='CouterUseStateHook-Container'>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default CouterUseStateHook