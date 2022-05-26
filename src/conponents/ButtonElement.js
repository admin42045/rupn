import styled from 'styled-components';
import {Link} from 'react-scroll';


export const Button = styled(Link)`
 border-radius: 50px;
 background: ${({primary}) => (primary ? '#01BF71': '#010606')};
 outline: none;
 border: none;
 color: ${({ dark}) => (dark ? '#010606': '#fff')};
 cursor: pointer;
 display: flex;
 padding: 12px 24px;
 align-items: center;
 transition: all 0.2s ease-in-out;

 &:hover{
     transition:all 0.2s ease-in-out;
     background: ${({primary}) => (primary ? '#129CF3': '#fff')};
     color: #fff;
 }
`