import { Container } from '@chakra-ui/layout'
import React from 'react'
import HeroAbout from './HeroAbout'
import Posts from './Posts'

function Hero() {
    return (
        <div>
           <HeroAbout/>
           <Posts/>
        </div>
    )
}

export default Hero
