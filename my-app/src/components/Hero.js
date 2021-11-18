import { Container } from '@chakra-ui/layout'
import React from 'react'
import Footer from './Footer'
import HeroAbout from './HeroAbout'
import Posts from './Posts'

function Hero() {
    return (
        <div>
           <HeroAbout/>
           <Posts/>
           <Footer/>
        </div>
    )
}

export default Hero
