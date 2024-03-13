import React from "react";
import {Card, CardBody, Divider, Button} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeFromCart} from "./redux/cartSlice.jsx";

export default function Cart() {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    // const totalAmount=totalAmount.push(cartItems.price)

    return (
        <Card className="w-1/4 flex justify-center items-center">
            <h4 className="font-bold">Shopping Cart</h4>
            <Divider/>
            <CardBody>
                <p className="font-bold text-2xl">Total: ${totalAmount}</p>
            <Divider/>
                <h4 className="font-bold">Items bought:</h4>
                <div>
                    {
                        cartItems.map(item => {
                            return(
                                <p>{item.productName}- ${item.price}
                                    <Button color="primary" className="ml-4"
                                            onClick={()=>dispatch(removeFromCart({productName: item.productName}))}>
                                        Remove
                                    </Button>
                                </p>
                            )
                        })
                    }
                </div>

                <br/>
                <Button color="danger">
                    Checkout
                </Button>
            </CardBody>
        </Card>
    );
}
