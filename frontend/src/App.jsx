import {Route, Routes} from "react-router-dom";
import ProductsPage from "./ProductsPage.jsx";
import Cart from "./Cart.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/ProductsPage.jsx" element={<ProductsPage/>}/>
            <Route path="/Cart.jsx" element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default App
