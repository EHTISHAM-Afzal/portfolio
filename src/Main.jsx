import * as React from 'react'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

import * as ReactDOM from 'react-dom/client'



// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)