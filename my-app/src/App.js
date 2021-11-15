import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

  const theme = extendTheme({
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
})

  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Hero/>
    </ChakraProvider>
  );
}

export default App;
