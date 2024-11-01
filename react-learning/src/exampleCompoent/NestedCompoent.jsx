import React from 'react'

const Love=()=>{
    return(
        <h1>I love sooo much Mangoes</h1>
    )
}
const Mango=()=>{
    return(
        <h1>Mangoes are sweet...........</h1>
    )
}
const NestedCompoent = () => { 
    // Compoent-1
  return (
    <div className='NestedCompoent-Container'>
         <Love /> 
        <Mango />
       
    </div>
  )
}

export default NestedCompoent