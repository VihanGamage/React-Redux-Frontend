import { useState } from 'react'
import {Button} from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button>click</Button>
    </>
  )
}

export default App
