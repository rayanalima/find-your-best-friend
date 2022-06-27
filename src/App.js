import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import 'bulma/css/bulma.min.css';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
