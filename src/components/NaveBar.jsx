import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Avatar,
  LinkBox,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box  className={` ${isVisible ? 'block':'hidden'}  h-16 fixed top-2 left-5 right-5 sm:left-10 sm:right-10  z-10 bg-opacity-30 backdrop-blur-sm`}>
    {/* {navebar} */}
    <Box className={` w-full sm:h-16  flex top-2 sm:top-4 sm:static justify-space-around items-center bg-transparent shadow-lg sm:flex-row sm:justify-around md:justify-between lg:justify-between border border-white rounded-lg p-2`}>
      <Box className="w-3/6 h-full hidden sm:flex justify-around items-center lg:w-3/12 shadow-lg rounded-lg bg-opacity-50 bg-clip-padding backdrop-blur-xl">
        <Link
          href="https://www.linkedin.com/in/ehtisham-afzal-819593195/"
          isExternal
          className="rounded-full shadow-md hover:shadow-white"
        >
          <Avatar
            name="LinkedIn"
            src="https://www.svgrepo.com/show/452051/linkedin.svg"
          />
        </Link>
        <Link
          href="https://github.com/EHTISHAM-Afzal"
          isExternal
          className="rounded-full shadow-md hover:shadow-white"
        >
          <Avatar
            name="GitHub"
            src="https://www.svgrepo.com/show/452211/github.svg"
          />
        </Link>
        <Link
          href="https://twitter.com/EHTISHAMoo7"
          isExternal
          className="rounded-full shadow-md hover:shadow-white"
        >
          <Avatar
            name="Twitter"
            src="https://www.svgrepo.com/show/452123/twitter.svg"
          />
        </Link>
        <Link
          href="https://twitter.com/EHTISHAMoo7"
          isExternal
          className="rounded-full shadow-md hover:shadow-white"
        >
          <Avatar
            name="Facebook"
            src="https://www.svgrepo.com/show/452196/facebook-1.svg"
          />
        </Link>
      </Box>
      <Box className="min-w-max w-3/6 bg-opacity-50 bg-clip-padding backdrop-blur-xl" />
      <Box className="w-3/6 h-full lg:w-2/12 text-white">
        <LinkBox className="flex flex-row h-12 min-h-full items-center justify-around shadow-md rounded-lg">
          <Link href="/" className="w-14">
            About
          </Link>
          <Link className="w-24">Contact_Me</Link>
        </LinkBox>
      </Box>

      <Box className="w-full sm:hidden flex justify-center items-center">
        <Button
          ref={btnRef}
          variant="outline"
          colorScheme="gray"
          onClick={onOpen}
        >
          Socials
        </Button>
        </Box>
        {/* <NaveBar  */}
        {/* {drawer} */}
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Soial Links</DrawerHeader>

            <DrawerBody>
              <Box className="w-full flex flex-col justify-around items-center">
                <Link
                  href="https://www.linkedin.com/in/ehtisham-afzal-819593195/"
                  isExternal
                  className="rounded-full shadow-md hover:shadow-white flex flex-row items-center text-center p-2 my-2 w-5/6"
                >
                  <Avatar
                    name="LinkedIn"
                    src="https://www.svgrepo.com/show/452051/linkedin.svg"
                  />
                  <h2 className="mx-2 text-sm">LinkedIn</h2>
                </Link>
                <Link
                  href="https://github.com/EHTISHAM-Afzal"
                  isExternal
                  className="rounded-full shadow-md hover:shadow-white flex flex-row items-center text-center p-2 my-2 w-5/6"
                >
                  <Avatar
                    name="GitHub"
                    src="https://www.svgrepo.com/show/452211/github.svg"
                  />
                  <h2 className="mx-2 text-sm">GitHub</h2>
                </Link>
                <Link
                  href="https://twitter.com/EHTISHAMoo7"
                  isExternal
                  className="rounded-full shadow-md hover:shadow-white flex flex-row items-center text-center p-2 my-2 w-5/6"
                >
                  <Avatar
                    name="Twitter"
                    src="https://www.svgrepo.com/show/452123/twitter.svg"
                  />
                  <h2 className="mx-2 text-sm">Twitter</h2>
                </Link>
                <Link
                  href="https://twitter.com/EHTISHAMoo7"
                  isExternal
                  className="rounded-full shadow-md hover:shadow-white flex flex-row items-center text-center p-2 my-2 w-5/6"
                >
                  <Avatar
                    name="Facebook"
                    src="https://www.svgrepo.com/show/452196/facebook-1.svg"
                  />
                  <h2 className="mx-2 text-sm">Facebook</h2>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        {/* {drawer} */} 
      </Box>
    </Box>
  );
};

export default NavBar;
