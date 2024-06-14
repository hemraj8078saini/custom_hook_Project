import React,{useState} from 'react'

const UseCounter = () => {
    const[count,setCount]=useState(0)
    function Increase(){
        setCount(count+1)
    }
    function Decrease(){
        setCount(count-1)
    }
  return [count,Increase,Decrease]
}

export default UseCounter
