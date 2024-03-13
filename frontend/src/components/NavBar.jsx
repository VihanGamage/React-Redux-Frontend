import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'

export default function NavBar() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <Navbar className="mb-4">

            <NavbarBrand>
                {/*<AcmeLogo />*/}
                <Link to="/" className="font-bold text-inherit">HOME</Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                <NavbarItem>
                    <Link to="productsPage.jsx" color="foreground">Products</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link to="cart.jsx" color="foreground">Cart {cartItems.length}</Link>
                </NavbarItem>

            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link to="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
