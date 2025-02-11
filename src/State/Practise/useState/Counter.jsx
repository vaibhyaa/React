import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState(0)


  function increment() {
    setcount(count+1)
    
  }

  function decrement() {
    setcount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter