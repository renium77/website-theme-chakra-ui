import React from 'react'
import { Container, Divider, Link, Text } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'

function HeroAbout() {
    return (
        <div>
            <Container maxW='6xl' pt='50px'>
                <Text fontSize={{base:'xl', md:'2xl'}}>
                    hello! i’m <chakra.span fontWeight='bold'>ninad.</chakra.span> i’ve been building projects for a couple of years now
                    and have had good success at some and have failed at many. previously i 
                    co-founded a services company <Link><chakra.span fontWeight='bold'>Aegeon Tech.</chakra.span></Link>
                </Text> 

                <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                    i live in <Link><chakra.span fontWeight='bold'>Aurangabad,</chakra.span></Link> and spend my free time trying to design fun software
                    experiences, tinkering with computers and books, researching about all things tech + startups, experimenting with various
                    frameworks.
                </Text>

                <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                    I like playing games and <Link fontWeight='bold'>Valorant</Link> is my drug of choice, turns out clicking on people’s heads can be oddly satisfying.
                </Text>

                <Text fontSize={{base:'xl', md:'2xl'}} pt='20px'>
                    my twitter is <Link fontWeight='bold'>ninadismyname</Link> and my e-mail is <Link fontWeight='bold'>dereninad@gmail.com.</Link>
                </Text>

                <Divider borderColor='black' pt='20px'/>
            </Container>
        </div>
    )
}

export default HeroAbout
