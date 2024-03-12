import React from "react";
import Product from "./Product.jsx";

export default function ProductsPage(){
    return(
        <>
            <div className="flex">
                <Product
                    imageUrl='src\productImages\headphone.jpeg'
                    alt={"headphone"}
                    productName="HeadPhone"
                    productDescription={"wireless headphone"}
                    price={4}
                />
                <Product
                    imageUrl='src\productImages\keyboard.jpg'
                    alt={"headphone"}
                    productName="HeadPhone"
                    productDescription={"wireless headphone"}
                    price={4}
                />
                <Product
                    imageUrl='src\productImages\mouse.webp'
                    alt={"headphone"}
                    productName="HeadPhone"
                    productDescription={"wireless headphone"}
                    price={4}
                />

            </div>


        </>
    )
}


// "src\productImages\headphone.jpeg"
