import React from "react";
import {Card, CardBody, Image, Button} from "@nextui-org/react";
import {useDispatch} from "react-redux";
import {addToCart} from "./redux/cartSlice.jsx";

export default function Product({imageUrl, alt, productName, productDescription, price}) {
    const dispatch = useDispatch()

    return (
        <>
            <Card className="w-1/4 flex justify-center items-center">
                    <Image className="mt-4 w-48 h-44"
                           alt={alt}
                           src={imageUrl}
                    />
                <CardBody className="items-center">
                    <h4 className="font-bold text-large mt-4">{productName}</h4>
                    <p className="text-tiny mb-3">{productDescription}</p>
                    <h4 className="font-bold p-2">{price}$</h4>
                    <Button color="primary" onClick={() => dispatch(addToCart({productName,price}))}>
                        Add To Cart
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}