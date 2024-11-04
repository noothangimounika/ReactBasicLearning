import React from 'react'

const ChildCompo = (props) => {
    const {model, year, dealer, color}=props.car;
  return (
    <div>
        <div>{model}</div>
        <div>{year}</div>
        <div>{dealer}</div>
        <div>{color}</div>
    </div>
  )
}

export default ChildCompo