import './App.css';

import React from 'react'
import Apple from './Apple';
import NestedCompoent from './exampleCompoent/NestedCompoent';

const App = () => {
  return (
    <div>
      <Apple />
      <NestedCompoent />
    </div>
  )
}

export default App