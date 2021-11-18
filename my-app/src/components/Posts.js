import { Box, Container, Link, SimpleGrid, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'


const post_links = [
    {
        title: '30 seconds of fame',
        link: 'https://ninad-dere.vercel.app/',
        date: 'Feb 26, 2021'
    },
    {
        title: '30 seconds of fame',
        link: 'ninad.dere-vercel-app',
        date: 'Feb 26, 2021'
    },
    {
        title: '30 seconds of fame',
        link: 'ninad.dere-vercel-app',
        date: 'Feb 26, 2021'
    },

]

function Posts() {
    return (
        <div>
            <Container maxW='6xl' pt='50px'>
                <Box bg='black'
                color='white' 
                fontSize={{base:'2xl', md:'3xl'}} 
                p={2} 
                w={{base:'150px', md:'250px'}}
                >
                    posts
                </Box>

                
                <Box pt='50px'>
                    <SimpleGrid columns={[1, null, 1]} spacing="40px">
                    {post_links.map((post_title) =>(
                        <Link key={post_title.title}
                        href={post_title.link} 
                        color="black" 
                        fontSize="2xl"
                        fontWeight='bold' 
                        >{post_title.title}</Link>
                    ))}
                    
                    </SimpleGrid>
                </Box>
                
            </Container>
        </div>
    )
}

export default Posts
