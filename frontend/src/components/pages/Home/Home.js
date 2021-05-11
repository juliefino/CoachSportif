import React from 'react';
import '../../../App.css';
import Cookie from "../../Cookies/Cookies";
import HeroSection from '../../HeroSection';
import Footer from '../../Footer';
import Sidebar from "../../sidebar";
import {isLoggedIn} from "../../auth";

function Home() {
    if (isLoggedIn()) {
        return (
            <>
                <Sidebar/>

                <HeroSection/>

                <Footer/>
            </>
        );
    } else {
        return (
            <>
                <HeroSection/>
                <Cookie/>
                <Footer/>
            </>
        );

    }
}

export default Home;
