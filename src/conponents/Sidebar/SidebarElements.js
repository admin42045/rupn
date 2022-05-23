import styled from 'styled-components';
import { FaTimes} from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background:#0d0d0d;
 display:grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen}) =>(isOpen ? '0%' : '100%')};
// top: 0;
`

export const CloseIcon  = styled(FaTimes)`
 color: #fff;
`

export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size:2rem;
 cursor: pointer;
 outline: none;
`


/* ****************** Side bar Wrapper ******************/
export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(1, 70px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 50px);
}
`
export const SidebarLink = styled(LinkS)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 transition:all 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 cursor: pointer; 
 
 &:hover {
     transition: all 0.2s ease-in-out;
     color: #129CF3;
 }

`

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
  margin-top: 5rem;
  font-size: 1.5rem;
  border-radius: 50px;
  border: none;
  padding: 12px 22px;
  cursor: pointer;
  outline: none;
  color: #fff;
  text-decoration: none;
  transition:all 0.2s ease-in-out;


  &:hover {
      transition: all 0.2s ease-in-out;
      background: #129CF3;
      color: #fff;
      font-size: 16px;
      ouline: none;
      border: none;
      font-size: 1.5rem
  }
  
`