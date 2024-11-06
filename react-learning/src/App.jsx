import './App.css';

import React from 'react'
import Firstcomp from './routerComponets/Firstcomp';
import SecondComp from './routerComponets/SecondComp';
import ThordComp from './routerComponets/ThordComp';
import FourthComp from './routerComponets/FourthComp';
import { Routes,Route } from 'react-router';

import NavBarComp from './NavBarComp';





const App = () => {
  return (
    <div>


        <NavBarComp />
       
        <Routes>
          <Route path="/" element={ <Firstcomp />} />
          <Route path='/about' element={ <SecondComp />} />
          <Route path='/blog' element={<ThordComp />} />
          <Route path='/contact' element={<FourthComp />} />
        </Routes>
       
       
       


    </div>
  )
}

export default App