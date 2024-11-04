import React, { useState } from 'react'

const ToggleUseState = () => {
    const[isVisible,SetIsVisible]=useState(true);
  return (
    <div className='ToggleUseState-Container'>
        <button onClick={()=>SetIsVisible(prev =>!prev)}>
            {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && <p>This Message is  Visible</p>}
    </div>
  )
}

export default ToggleUseState