import React from "react";
import {Card, CardBody, Image, Button, Chip} from "@nextui-org/react";

export default function Product({imageUrl, alt, productName, productDescription, price}) {
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
                    <Button color="primary">
                        Add To Cart
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}