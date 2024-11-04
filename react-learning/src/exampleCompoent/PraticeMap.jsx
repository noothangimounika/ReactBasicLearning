import React from 'react'
import ReactDOM from 'react-dom/client';
const PraticeMap = () => {
    const myArray = ['apple', 'banana', 'orange'];

    const myList = myArray.map((item) => <p>{item}</p>)
    
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(myList);
  return (
    <div className='PraticeMap'>
       
    </div>
  )
}

export default PraticeMap