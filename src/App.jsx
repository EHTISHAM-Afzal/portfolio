import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import { Box } from "@chakra-ui/react";
import ContactMe from "./components/ContactMe";
import { Routes, Route, Link } from "react-router-dom";
// import Motion from './components/motion'

const App = () => {
  return (
    <Box
      scrollSnapType={"y mandatory"}
      className="  min-w-[100vw]  w-[100vw] sm:w-[9vw] mx-[-4px]  md:mx-[0px]  bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600"
      bgColor={"black"}
    >
      <Routes>
        <Route path={"/"}>
          <Route
            index
            element={
              <>
                <HeroSection />
                <Projects />
                <ContactMe />
              </>
            }
          />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
