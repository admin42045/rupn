import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu ,NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">rupn</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">HirMe</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>  
        </>
    )
}

export default Navbar;