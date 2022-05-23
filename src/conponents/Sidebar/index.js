import React from 'react';
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebarBtnWrap,SidebarRoute } from './SidebarElements';


const Sidebar =({toggle, isOpen}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="hireme" onClick={toggle}>HireMe</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;