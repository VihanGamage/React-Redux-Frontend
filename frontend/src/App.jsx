import {Route, Routes} from "react-router-dom";
import ProductsPage from "./ProductsPage.jsx";
import Cart from "./Cart.jsx";
import Test from "./Test.jsx";
import DeliveryForm from "./DeliveryForm.jsx";
import Home from "./Home.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/Home.jsx" element={<Home/>}/>
            <Route path="/ProductsPage.jsx" element={<ProductsPage/>}/>
            <Route path="/Cart.jsx" element={<Cart/>}/>
            <Route path="/Test.jsx" element={<Test/>}/>
            <Route path="/DeliveryForm.jsx" element={<DeliveryForm/>}/>


        </Routes>
    </>
  )
}

export default App
