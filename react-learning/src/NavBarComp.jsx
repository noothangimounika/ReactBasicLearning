import React from 'react'
import {Link} from 'react-router-dom'

const NavBarComp = () => {
  return (
    <div className='NavBarComp-Container'>
        <ul>
            <Link to="/"> <li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/contact"> <li>Contact Us</li></Link>
           
        </ul>
    </div>
  )
}

export default NavBarComp




// import { useEffect, useState } from "react"


// function NavBarComp(){

//     const [data,setdata] = useState([]) 

//     useEffect(() =>{
//         fetch('https://fakestoreapi.com/products')

//             .then(res=>res.json())

//             .then(json=>console.log(json))
//     },[])
    

//     const fetchdata = async () =>{
        
//         let response = await fetch('https://fakestoreapi.com/products')

//         let data = await response.json()

//         console.log('another type')
//         console.log(data)
//         setdata(data)
//     }
    
//     useEffect(() =>{
//         fetchdata()
//     },[])

//     return(
//         <div>
//             <h1>Coming data</h1>
//             <div style={{display:'grid',gridTemplateColumns:"300px 300px 300px",gap:230,maxHeight:"300px"}}>

//                 {
//                     data.map((item) =>{
//                         return(
//                             <div>{item.category}  
//                             <p>{item.description}</p>
//                             <img  src={item.image} />
//                             </div>
                            
//                         )
//                     })
//                 }

//             {
//                 data.map((items) =>{
//                     return(
                        
//                         <div style={{width:"300px"}}>
//                             <h1>{items.category}</h1>
//                             <p>{items.description}</p>
//                             <img src={items.image} style={{width:"100px",height:"100px"}}/>
//                             </div>
                            
//                     )
//                 })
//             }
//         </div>
//   </div>
//     )
// }
// export default NavBarComp