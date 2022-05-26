import React , { useState } from 'react';
import HeroSection from '../conponents/HeroSection';
import Navbar from '../conponents/Navbar/Navbar';
import Sidebar from '../conponents/Sidebar';


const Home = () => {

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
       setIsOpen(!isOpen);
   }


    return(
        <>
        <Sidebar isOpen={isOpen}  toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        </>
    )
}


export default Home;