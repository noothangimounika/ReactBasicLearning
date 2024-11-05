import './App.css';

import React from 'react'
import CurdOperationComponent from './CurdOperationComponent';
import FetchDataComp from './FetchDataComp';
// import HookUseState from './statemanagement/HookUseState';
// import CouterUseStateHook from './statemanagement/CouterUseStateHook';
// import ToggleUseState from './statemanagement/ToggleUseState';
// import ItemListUseStateHook from './statemanagement/ItemListUseStateHook';
// import DesctruingComp from './propsDestructuring/DesctruingComp';
// import Apple from './Apple';
// import NestedCompoent from './exampleCompoent/NestedCompoent';
// import PraticeMap from './exampleCompoent/PraticeMap';
// import ContainerForProps from './propsContainer/ContainerForProps';



const App = () => {
  return (
    <div>
      {/* <Apple />
      <NestedCompoent />
      <PraticeMap /> */}
      {/* <ContainerForProps />

      <DesctruingComp />

      <HookUseState />
      <CouterUseStateHook />
      <ToggleUseState />
      <ItemListUseStateHook /> */}
      <CurdOperationComponent />
      <FetchDataComp />
    </div>
  )
}

export default App