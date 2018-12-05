/**
 * 应用
 */
import React, { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)
  // tslint:disable-next-line
  return <div onClick={() => setCount(count + 1)}>App {count}</div>
}

export default App
