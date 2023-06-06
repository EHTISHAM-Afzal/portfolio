import * as React from 'react'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'



// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)