import React from 'react'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import { Box } from '@chakra-ui/react'
import ContactMe from './components/ContactMe'
// import Motion from './components/motion'



const App = () => {
  return (
    <Box  className=' min-w-[100vw] min-h-[100vh] w-[100vw] h-[100vh] sm:w-[9vw] mx-[-4px] md:mx-[0px] overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600'  bgColor= {'black'} >
    
    <HeroSection />
    <Projects/>
    <ContactMe />
    {/* <Motion/> */}
    </Box>
  )
}

export default App