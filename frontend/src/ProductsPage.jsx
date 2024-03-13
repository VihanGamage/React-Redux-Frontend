import React from "react";
import Product from "./Product.jsx";

export default function ProductsPage() {
    return (
        <>
            <div className="flex justify-center space-x-3">
                <Product
                    imageUrl='src\productImages\headphone.jpeg'
                    alt={"headphone"}
                    productName="HeadPhone"
                    productDescription={"wireless headphone"}
                    price={4}
                />
                <Product
                    imageUrl='src\productImages\keyboard.jpg'
                    alt={"keyboard"}
                    productName="Keyboard"
                    productDescription={"wireless keyboard"}
                    price={3}
                />
                <Product
                    imageUrl='src\productImages\mouse.webp'
                    alt={"mouse"}
                    productName="Mouse"
                    productDescription={"wireless mouse"}
                    price={3}
                />

            </div>


        </>
    )
}


