import { Box, Container, Link, Stack, Text, SimpleGrid, Center } from '@chakra-ui/layout'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {Button} from '@chakra-ui/react'


function Footer() {
    return (
        <div>

        
            <Box>
                <Container
                as={Stack}
                maxW={'6xl'}
                direction={{ base: 'column', md: 'row' }}
                spacing={5}
                justify={'space-between'}
                align={{base:'left', md:'center'}}
                pt='300px'
                pb='20px'
                    >
                        <Stack direction={'row'} spacing={6}>
                            <Link><FaInstagram color='black' size='40px' /></Link>
                            <Link><FaTwitter color='black' size='40px' /></Link>
                            <Link><FaLinkedin color='black' size='40px' /></Link>
                            <Link><FaGithub color='black' size='40px' /></Link>
                        </Stack>
                    

                    <Link><Text fontWeight='semibold' fontSize='xl' color='#a9a9a9'>@ninadismyname</Text></Link>
                </Container>
            </Box>
        </div>
    )
}

export default Footer
