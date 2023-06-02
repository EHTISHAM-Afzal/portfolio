import React from "react";

import { Flex, Image, Box, Text } from "@chakra-ui/react";

import NaveBar from "./NaveBar";

const HeroSection = () => {
  return (
    <Flex
      height={"100vh"}
      width={"full"}
      flexDirection={"column"}
      className="  px-4 lg:px-24 md:px-12 sm:px-8"
    >
      <NaveBar />

      <Box className=" w-full h-4/6 sm:h-4/6 pt-20 flex flex-col justify-center items-center">
        <Box className=" w-72 h-72 sm:w-80   sm:h-80 md:w-96 md:h-96 rounded-full flex justify-center items-center  overflow-hidden  object-fill border-2 border-white shadow-lg ">
          <Image
            src={
              "../assets/DALL·E 2023-05-25 10.58.54 - Change outfit into black suit ~2.png"
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
