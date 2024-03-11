import { useState } from 'react'
import {Link,Routes,Route} from "react-router-dom";
import Product from "./Product.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
          <Route path="product.jsx" element={<Product/>}/>
      </Routes>
  )
}

export default App
