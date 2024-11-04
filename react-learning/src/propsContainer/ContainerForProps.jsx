import React from 'react'
import FirstComonent from './FirstComonent'
import SecondComonent from './SecondComonent'
import ThordComonent from './ThordComonent'
import FourthComonent from './FourthComonent'

const ContainerForProps = () => {
  const user={
    name:"DevendraNath", city:"PDTR", area:"pdtr"
  }
  return (
    <div>
        {/* <FirstComonent  name="Mounika" />
        <SecondComonent name="MouniDeva"/>
        <ThordComonent name="Chitti" />
        <FourthComonent name="Hello Everyone" /> */}

        <FirstComonent name={user.name} />
        <SecondComonent name={user.city} />
        <ThordComonent name={user.area} />
        <FourthComonent name="Hello " />

    </div>
  )
}

export default ContainerForProps