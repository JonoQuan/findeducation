import React from 'react';
import Title from './Title';
import Contact from './Contact';
import AusAd from './AusAd';
import Process from './Process';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

const Index = () => {
    return (
        <div>
            <NavBar />
            <Title />
            <AusAd />
            <Process />
            <Contact />
            <Footer />
        </div>
    )
}

export default Index;
