import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import NavBar from "./NaveBar";


const HeroSection = () => {
  return (
    <Flex
      height={"100vh"}
      width={"full"}
      flexDirection={"column"}
      scrollSnapAlign={"start"}
      className=" px-4 lg:px-24 md:px-12 sm:px-8"
      
    ><NavBar/>
      <Box className=" w-full h-4/6 sm:h-4/6 pt-20 flex flex-col justify-center items-center">
        <Box className=" w-72 h-72 sm:w-80   sm:h-80 md:w-96 md:h-96 rounded-full flex justify-center items-center  overflow-hidden  object-fill border-2 border-white shadow-lg ">
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/sham-7b962.appspot.com/o/DALL%C2%B7E%202023-05-25%2010.58.54%20-%20Change%20outfit%20into%20black%20suit%20~2.png?alt=media&token=c61715cf-4f6c-47ab-8ba0-06647699cc36&_gl=1*dh55di*_ga*OTUzMzA0NDguMTY4NTYyNjMyOQ..*_ga_CW55HF8NVT*MTY4NTg0ODkwMS4zLjEuMTY4NTg0OTc1Ni4wLjAuMA.."
            }
            alt="Ihtisham Afzal"
            className="w-full object-cover"
          />
        </Box>
        <Text fontFamily={'Alkatra'} className="text-white text-2xl font-bold mt-4 text-center ">
          Hello I am <br />
          <span className=" font-bold tracking-wider  ">
            Ihtisham Afzal
          </span>
        </Text>
      </Box>
      <Box className="flex justify-center items-center w-full sm-h-1/6 h-2/6  sm:mt-auto  text-yellow-400 text-4xl sm:text-5xl md:text-6xl font-bold text-center  ">
        <Text fontFamily={'Alkatra'}>
          A frontend web developer <br />
          specialised in React
        </Text>
      </Box>
    </Flex>
  );
};

export default HeroSection;
