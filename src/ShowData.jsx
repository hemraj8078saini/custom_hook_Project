import React from 'react'
import Useapi from './Useapi'

const ShowData = () => {
    const [data,getdata]=Useapi()
    console.log(data);
  return (
    <div className='product-container'>
      {data.map((e)=>{
        return(<div>
            <div><img src={e.image}></img></div>
            <div><h4>{e.title}</h4></div>
            </div>
        )
      })}
    </div>
  )
}

export default ShowData
