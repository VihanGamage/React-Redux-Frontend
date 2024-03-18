import React from "react";
import {Card, CardBody, Divider} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeFromCart} from "./redux/cartSlice.jsx";
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";


export default function Cart() {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    const navigate = useNavigate();
    const goToDelivery = () => {
        navigate("/DeliveryForm.jsx");
    }

    return (
        <div className="mx-auto w-1/4">
        <Card>
            <h4 className="font-bold text-center">Shopping Cart</h4>
            <Divider/>
            <CardBody>
                <p className="font-bold text-2xl text-center">Total: ${totalAmount}</p>
            <Divider/>
                <h4 className="font-bold">Items bought:</h4>
                <div>
                    {
                        cartItems.map(item => {
                            return(
                                <p className="mb-2">{item.productName}- ${item.price}
                                    <Button className="ml-4" variant="contained" color="success"
                                            onClick={()=>dispatch(removeFromCart({productName: item.productName}))}>
                                        Remove
                                    </Button>
                                </p>
                            )
                        })
                    }
                </div>

                <br/>
                <Button onClick={goToDelivery} variant="contained" color="error">
                    checkout
                </Button>

            </CardBody>
        </Card>
        </div>
    );
}
