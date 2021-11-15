import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';

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
    </ChakraProvider>
  );
}

export default App;
