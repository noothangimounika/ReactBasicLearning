import './App.css';

import React from 'react'
import Apple from './Apple';
import NestedCompoent from './exampleCompoent/NestedCompoent';
import ReactEs6 from './exampleCompoent/ReactEs6'

const App = () => {
  return (
    <div>
      <Apple />
      <NestedCompoent />
      <ReactEs6 />
    </div>
  )
}

export default App