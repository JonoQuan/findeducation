import React from 'react'
import Title from './Title'
import Contact from './Contact'
import AusAd from './AusAd'
import Process from './Process'
import NavBar from './../navbar/NavBar'
import Footer from './../footer/Footer'
import InfoMain from './InfoMain'

const Index = () => {
    const refs = React.createRef();

    return (
        <div>
            <NavBar />
            <Title refs={refs} />
            <AusAd />
            <Process />
            <div ref={refs}>
            <InfoMain />
            </div>
            <Contact />
            <Footer />
        </div >
    )
}

export default Index
