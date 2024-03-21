import React from "react";
import {TextField, Button, Stack, Checkbox,Input} from "@mui/material"
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod"
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";

const schema = z.object({
    name: z.string().nonempty("name is required"),
    address: z.string().nonempty("address is required"),
    age: z.boolean().default(true).optional()

});


export default function DeliveryForm(){
    const form  = useForm({
        defaultValues:{
            name:"",
            address:"",
            age:true,
        },
        resolver: zodResolver(schema)
    })

    const {
        register,
        handleSubmit
    } = form

    const url = "https://localhost:2020/api"

    const onSubmit = async (data) => {
        try {
            await axios.post(url, {
                name: data.name,
                address: data.address,
                age: data.age
            })
            console.log(data)
        }catch (error){
            console.error("can't post",error)
        }
    }



    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-1/4">
                <Stack spacing={2} width={400}>

                    <TextField
                        label="Name"
                        {...register("name")}
                    />
                    <TextField
                        label="Address"
                        {...register("address")}
                    />
                    <FormControlLabel
                        label="Age"
                        control={<Checkbox
                        defaultChecked={true}
                        />}
                        {...register("age")}
                    />


                    <Button type="submit" variant="contained" color="warning">
                        Submit
                    </Button>

                </Stack>
            </form>
        </>
    )
}