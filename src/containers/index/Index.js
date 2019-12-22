import React from 'react';
import Title from './Title';
import Contact from './Contact';
import AusAd from './AusAd';
import Process from './Process';
import NavBar from '../navbar/NavBar';

const Index = () => {
    return (
        <div>
            <NavBar />
            <Title />
            <AusAd />
            <Process />
            <Contact />
        </div>
    )
}

export default Index;
