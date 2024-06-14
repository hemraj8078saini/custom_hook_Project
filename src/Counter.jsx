import React, { useState } from 'react'
import UseCounter from './UseCounter'

const Counter = () => {
    const[count,Increase,Decrease]=UseCounter()
    
  return (
    <div>
      <button onClick={Increase}>Increase</button>{count}
      <button onClick={Decrease}>Decrease</button>

    </div>
  )
}

export default Counter
