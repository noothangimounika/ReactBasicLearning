import React from 'react'

const FirstComonent = (props) => {
  console.log(props)
  return (
    <div>
        {props.name}
    </div>
  )
}

export default FirstComonent