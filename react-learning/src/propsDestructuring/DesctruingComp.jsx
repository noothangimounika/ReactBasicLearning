import React from 'react'
import ChildCompo from './ChildCompo'


const carObjDetails={
    model:"Maruti",
    year: 2024,
    dealer:"nixon",
    color:"Red"
}
const DesctruingComp = () => {
  return (
    <div>
        <ChildCompo car={carObjDetails} />
    </div>
  )
}

export default DesctruingComp