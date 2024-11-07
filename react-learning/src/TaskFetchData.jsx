import React, { useEffect, useState } from 'react'

const TaskFetchData = () => {

    const [data,setdata]=useState([])

    useEffect (()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

    const fetchdata=async()=>{
        let respose= await  fetch('https://fakestoreapi.com/products')
        let data=await respose.json()

        console.log(data)
        setdata(data)

    }

    useEffect(()=>{
        fetchdata()
    },[])

  return (
    <div className='TaskFetchData-Container'>
        <h1>Feacthing data From API'S</h1>
        {
           data.map((item) =>{
                                    return(
                                        <div className='items-container'>
                                            <h2>{item.category} </h2> 
                                            <img  src={item.image} />
                                            <p>{item.description}</p>
                                            <p>Price: ${item.price}</p>
                                        </div>
                                        
                                    )
                                })
        }
    </div>
  )
}

export default TaskFetchData