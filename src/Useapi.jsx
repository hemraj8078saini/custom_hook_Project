import React, { useEffect, useState } from 'react'

const Useapi = () => {
    const[data,setData]=useState([])
    const getdata=async()=>{
       try {
         let response=await fetch("https://fakestoreapi.com/products")
         let data=await response.json();
         setData(data)
         console.log(data);
       } catch (error) {
        console.log(error);
        
       }
    }
    useEffect(()=>{
        getdata()
    })
  return [data,getdata]
   
}

export default Useapi
