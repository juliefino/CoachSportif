import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Sidebar from "../sidebar";
import {isLoggedIn} from "../auth";

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

                <Footer/>
            </>
        );

    }
}

export default Home;
