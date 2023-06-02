import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
  Textarea,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Your name must have more than 3 characters")
    .max(20, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(25, "Your message must have more than 25 characters")
    .max(500, "Too Long!")
    .required("Message is required"),
});

function ContactForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
    formik.isSubmitting = false;
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      select: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setIsDialogOpen(true);
    },
  });

  return (
    <Flex align="center" justify="center" h="100vh" w="100vw">
      <Box
        bg="transparent"
        p={6}
        rounded="md"
        w={["90%", "70%", "60%"]}
        textColor="whiteAlpha.900"
      >
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl
              isRequired
              isInvalid={formik.errors.name && formik.touched.name}
            >
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <Input
                variant="outline"
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                variant="outline"
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="select">Type of Inquiry</FormLabel>
              <Select
                variant="outline"
                textColor="blackAlpha.900"
                name="select"
                id="select"
                value={formik.values.select}
                onChange={formik.handleChange}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="FreelanceProject">Freelance Project</option>
                <option value="HireMe">Hire Me</option>
                <option value="ContactMe">Contact Me</option>
              </Select>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={formik.errors.message && formik.touched.message}
            >
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <Textarea
                variant="outline"
                type="text"
                resize="none"
                placeholder="Message"
                rows={10}
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>

            <Button
              isDisabled={!formik.isValid}
              type="submit"
              variant="outline"
              _hover={{ textColor: "blackAlpha.900", bg: "whiteAlpha.900" }}
              width="full"
              isLoading={formik.isSubmitting}
            >
              Submit
            </Button>
          </VStack>
        </form>
        {isDialogOpen && (
          <Box 
               position="fixed" 
               top={0} 
               left={0} 
               w="full" 
               h="full" 
               zIndex="modal" 
               backdropFilter={"blur(3px)"} 
               display={"flex"} 
               justifyContent={"center"} 
               alignItems={"center"}
                onClick={closeDialog}
                >
            <Alert
              status='success'
              textColor={'blackAlpha.900'}
              borderRadius={'lg'}
              w={'auto'}
              h={'auto'}
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Application submitted!
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
                Thanks for submitting your application. I will get back to you soon.
              </AlertDescription>
              <Button 
               mt={4} variant={'outline'} 
               colorScheme='telegram'>Got it!</Button>
            </Alert>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default ContactForm;
