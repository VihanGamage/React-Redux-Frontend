import React from "react";
import { Button } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/counterSlice.jsx";

export default function Test(){
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)


    return(
        <>
            <Button variant="contained" onClick={() => dispatch(increment())}>
                increment
            </Button>
            <p>{count}</p>
            <Button variant="contained" onClick={() => dispatch(decrement())}>
                decrement
            </Button>

        </>
    )
}