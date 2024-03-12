import {Button} from "@nextui-org/react";
import ProductsPage from "./ProductsPage.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path="/ProductsPage.jsx" element={<ProductsPage/>}/>
        </Routes>
    </>
  )
}

export default App
