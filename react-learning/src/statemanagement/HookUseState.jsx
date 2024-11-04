// import React, { useState } from 'react'

// const HookUseState = () => {

//     const [city,setCity]=useState("PML")

//   return (
//     <div>HookUseState</div>
//   )
// }

// export default HookUseState

import React, { useState } from 'react'

const HookUseState = () => {
    const [name,setName]=useState('');
  return (
    <div className='HookUseState-Container'>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='Enter Your Name'
         />
         <h1>Hello {name}</h1>
    </div>
  )
}

export default HookUseState