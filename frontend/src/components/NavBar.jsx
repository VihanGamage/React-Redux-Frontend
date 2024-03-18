import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import {Badge, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <Navbar className="mb-4">

            <NavbarBrand>
                <Link to="Home.jsx" className="font-bold text-inherit flex">
                    <HomeIcon color="error" />
                    <p>E COMMERCE APP</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                <NavbarItem>
                    <Link to="ProductsPage.jsx" color="foreground">Products</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link to="test.jsx" color="foreground">Test</Link>
                </NavbarItem>
                
                <NavbarItem>
                    <Link to="cart.jsx" color="foreground">
                        <Badge badgeContent={cartItems.length} color="primary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </Link>
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
