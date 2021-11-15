import React from 'react'
import { Box, Heading, Stack, Text, Flex, Link, Spacer } from '@chakra-ui/layout'
import { Button, Menu, IconButton, extendTheme } from '@chakra-ui/react'
import { AiOutlineMenu } from "react-icons/ai";
import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer,DrawerContent, DrawerBody, DrawerOverlay, DrawerHeader } from '@chakra-ui/modal';

function Navbar() {

  const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
})

  const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="white"
        color="black"
        opacity="30"
        pt='50px'
        >

      <Flex align="center" >
        <Link>
            <Heading as="h1" size="xl" textDecoration='none'>
                ninad dere
            </Heading>
        </Link>
      </Flex>
      <Spacer/>

      
    <Menu display={{ base: "inline-flex", md: "none" }}>
        <Box>
        <Button
            as={IconButton}
            aria-label="Options"
            border='black'
            icon={<AiOutlineMenu />}
            bgColor="#none"
            variant="outline"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
        />
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay/>
                                    <DrawerContent>
                                      <DrawerBody>
                                        <DrawerHeader borderBottomWidth="1px"><Link to="/international" color="black" fontSize="lg">International Tours</Link></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><Link to="/domestic" color="black" fontSize="lg">Domestic Tours</Link></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><Link to="/customise" color="black" fontSize="lg">Customise</Link></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><Link to='/testimonial' color="black" fontSize="lg">Testimonials</Link></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><Link to='/blog' color="black" fontSize="lg">More</ Link></DrawerHeader>
                                        <DrawerHeader borderBottomWidth="1px"><Link to='/contactus' color="black" fontSize="lg">Contact Us</ Link></DrawerHeader>
                                      </DrawerBody>
                                    </DrawerContent>
        </Drawer>
        </Box>
        </Menu>
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "inline-flex" }}
        width={{ base: "full", md: "auto" }}
        justifyContent="end"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing={5}
        border='black'
      >
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}>projects</Button>
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}>about</Button>
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}>posts</Button>
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}>work</Button>
        <Button border='2px' borderRadius='20' fontSize="lg" bg='white' color="black" _hover={{bg:'black', color:'white'}}>links</Button>
      </Stack>
      

      
    </Flex>
        </div>
    )
}

export default Navbar

