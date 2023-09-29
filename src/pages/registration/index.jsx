import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  // useToast,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Icon } from "@iconify/react";
import RegistrationModal from "../../component/Modal";
import { Link } from "react-router-dom";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  // const toast = useToast({ position: `top` });

  const baseUrl = "https://express.techstudio.academy/api/v1/facebookAd";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    try {
      setIsLoading(true);

      const res = await axios.post(baseUrl, data);
      console.log(res);

      if (res.status === 201) {
        setIsSuccessModalOpen(true);
      } else {
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      setIsErrorModalOpen(true);
    }

    setIsLoading(false);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    reset(); // Clear the form
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };

  //   const handleSubmitForm = async (data) => {
  //     try {
  //       setIsLoading(true);

  //       const res = await axios.post(baseUrl, data);
  //       console.log(res);
  //       toast({
  //         title: "Successful",
  //         description: " Registration Successful",
  //         status: "success",
  //         duration: 9000,
  //         isClosable: true,

  //       });
  //       if(status===200) {
  //         nagivate(`/login`)
  //       }
  //     } catch(error) {
  //       toast({
  //         title: "Error!",
  //         description: " Registration Unsuccessful",
  //         status: "warning",
  //         duration: 9000,
  //         isClosable: true,

  //       });
  //     }

  //     setIsLoading(false);
  //   };

  return (
    <Flex justify={`space-between`} align={`center`} m={`0 auto`}>
      <Box>
        <Image
          src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218517/techstudio-web-app/assets/images/authImg_uy00im.webp"
          h={{ lg: `44rem` }}
          w={{ lg: `46.375rem` }}
          objectFit={`cover`}
          display={{ base: `none`, lg: `block` }}
        />
      </Box>

      <Box
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`center`}
        m={`0 auto`}
      >
        <Box
          w={{ base: `360px`, lg: `37.125rem` }}
          h={`auto`}
          boxShadow={`2px 2px 10px 2px rgba(0, 0, 0, 0.10)`}
          backgroundColor={`#fff`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`center`}
          alignItems={`flexStart`}
          m={`0 auto`}
          mt={{ lg: `2rem` }}
          p={{ base: `2rem`, lg: `3.69rem 3.06rem 3.62rem 3.06rem` }}
        >
          <Heading
            fontSize={{ base: `1rem`, lg: `1.5rem` }}
            fontWeight={600}
            textAlign={`start`}
            mb={`1.06rem`}
          >
            One last step, let’s get to know you
          </Heading>
          <Text
            fontSize={{ base: `.875rem`, lg: `.9375rem` }}
            lineHeight={{ base: `1rem`, lg: `1.5rem` }}
            mb={{ base: `2rem`, lg: `3.88rem` }}
          >
            Fill in your details to get started.
          </Text>
          <FormControl onSubmit={handleSubmit(handleSubmitForm)} as={`form`}>
            <Flex
              flexDir={{ base: `column`, lg: `row` }}
              justify={`flex-start`}
              align={{ base: `start`, lg: `center` }}
              gap={{ lg: `2rem` }}
            >
              <Box>
                <FormLabel
                  fontSize={{ lg: `.875rem` }}
                  lineHeight={{ lg: `1.375rem` }}
                  fontWeight={600}
                  // mb={{ lg: `.5rem` }}
                  color={`#3E3E3E`}
                >
                  First Name
                </FormLabel>
                <Input
                  type="text"
                  id={`firstName`}
                  name={`firstName`}
                  {...register("firstName", {
                    required: "First Name is required",
                    pattern: {
                      value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                      message: <Text>Name must start with capital letter</Text>,
                    },
                  })}
                  placeholder="First Name"
                  w={{ base: `17rem`, lg: `14.5625rem` }}
                  h={{ base: `2.5625rem` }}
                />

                <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    margin: "1rem 1rem",
                  }}
                >
                  {errors?.firstName?.message}
                </span>
              </Box>

              <Box>
                <FormLabel
                  fontSize={{ lg: `.875rem` }}
                  lineHeight={{ lg: `1.375rem` }}
                  fontWeight={600}
                  mb={{ lg: `.5rem` }}
                  color={`#3E3E3E`}
                >
                  Last Name
                </FormLabel>
                <Input
                  type="text"
                  id={`lastName`}
                  name={`lastName`}
                  {...register("lastName", {
                    required: "Last Name is required",
                    pattern: {
                      value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                      message: <Text>Name must start with capital letter</Text>,
                    },
                  })}
                  placeholder="Last Name"
                  w={{ base: `17rem`, lg: `14.5625rem` }}
                  h={{ base: `2.5625rem` }}
                />
                <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    margin: "1rem 1rem",
                  }}
                >
                  {errors?.lastName?.message}
                </span>
              </Box>
            </Flex>

            <Flex
              flexDir={{ base: `column`, lg: `row` }}
              justify={`flex-start`}
              align={{ base: `start`, lg: `center` }}
              gap={{ lg: `1.94rem` }}
            >
              <Box>
                <FormLabel
                  fontSize={{ base: `.875rem` }}
                  lineHeight={{ base: `1.375rem` }}
                  fontWeight={600}
                  // mb={{ lg: `.5rem` }}
                  color={`#3E3E3E`}
                >
                  Your Phone Number
                </FormLabel>
                <Input
                  type="tel"
                  id={`phoneNumber`}
                  name={`phoneNumber`}
                  {...register("phoneNumber", {
                    required: "Enter phone number",
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                      message: "Phone number must not contain text",
                    },
                  })}
                  placeholder="User type"
                  w={{ base: `17rem`, lg: `14.5625rem` }}
                  h={{ base: `2.5625rem` }}
                />

                <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    margin: "1rem 1rem",
                  }}
                >
                  {errors?.phoneNumber?.message}
                </span>
              </Box>

              <Box>
                <FormLabel
                  fontSize={{ lg: `.875rem` }}
                  lineHeight={{ lg: `1.375rem` }}
                  fontWeight={600}
                  mb={{ lg: `.5rem` }}
                  color={`#3E3E3E`}
                >
                  Email
                </FormLabel>
                <Input
                  type="email"
                  id={`email`}
                  name={`email`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                      message: "Email is not valid.",
                    },
                  })}
                  placeholder="name@example.com"
                  w={{ base: `17rem`, lg: `14.5625rem` }}
                  h={{ base: `2.5625rem` }}
                />
                <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    margin: "1rem 1rem",
                  }}
                >
                  {errors?.email?.message}
                </span>
              </Box>
            </Flex>

            <Box>
              <Checkbox
                type="checkbox"
                // {...register("checkbox", {
                //   required: "Checkbox section is required",
                //   // message: "Checkbox section is required",
                // })}
                className="checkbox"
                whiteSpace={`nowrap`}
              >
                <Text
                  fontSize={{ base: `.75rem`, lg: `.875rem` }}
                  lineHeight={{ lg: `1.375rem` }}
                  
                >
                  {" "}
                  Send me alerts and weekly newletters
                </Text>
              </Checkbox>
              <span
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  margin: "1rem 1rem",
                }}
              >
                {errors?.checkbox?.message}
              </span>
            </Box>

            <Button
              w={{ base: `17rem`, lg: `31rem` }}
              h={{ base: `2.625rem` }}
              bgColor={`blue.100`}
              color={`#fff`}
              display={`flex`}
              justifyContent={`center`}
              alignItems={`center`}
              gap={{ lg: `.625rem` }}
              p={{ lg: `0.625rem 13.6875rem` }}
              borderRadius={`.3125rem`}
              _hover={{ bgColor: `blue.300`, opacity: 1 }}
              mt={{ lg: `3.56rem` }}
              type={`submit`}
              isLoading={isLoading}
              loadingText="Registering..."
            >
              Register
            </Button>
          </FormControl>
        </Box>

        <Flex
          color={`blue.300`}
          align={`center`}
          gap={{ lg: `2rem` }}
          justify={`space-between`}
          mt={{ base: `2.5rem`, lg: `1.94rem` }}
          mb={{ base: `2rem` }}
          className="cc-container"
        >
          <Link to={"/"}>
            <Text
              lineHeight={{ lg: `1.8rem` }}
              letterSpacing={{ lg: `.0125rem` }}
              fontSize={{ base: `.875rem`, lg: `1rem` }}
              fontWeight={600}
            >
              &copy; {new Date().getFullYear()} TechStudio Academy
            </Text>
          </Link>
          <ul
            style={{
              display: `flex`,
              alignItems: `center`,
              gap: `1rem`,
              listStyle: `none`,
            }}
          >
            <li>
              <a
                target={`_blank`}
                href="https://twitter.com/techstudioacdmy"
                className="text-white cc-link-hover"
              >
                <Box
                  as={Icon}
                  w={{ base: `15px`, lg: `24px` }}
                  h={{ base: `15px`, lg: `24px` }}
                  icon={`fa:twitter`}
                />
              </a>
            </li>
            <li>
              <a
                target={`_blank`}
                href="https://facebook.com/techstudioacademy"
                className="text-white cc-link-hover "
              >
                <Box
                  as={Icon}
                  w={{ base: `15px`, lg: `24px` }}
                  h={{ base: `15px`, lg: `24px` }}
                  icon={`fa:facebook`}
                />
              </a>
            </li>
            <li>
              <a
                target={`_blank`}
                href="https://instagram.com/techstudioacademy"
                className="text-white cc-link-hover "
              >
                <Box
                  as={Icon}
                  w={{ base: `15px`, lg: `24px` }}
                  h={{ base: `15px`, lg: `24px` }}
                  icon={`fa:instagram`}
                />
              </a>
            </li>

            <li>
              <a
                target={`_blank`}
                href="https://linkedin.com/company/tech-studio-academy"
                className="text-white cc-link-hover "
              >
                <Box
                  as={Icon}
                  w={{ base: `15px`, lg: `24px` }}
                  h={{ base: `15px`, lg: `24px` }}
                  icon={`fa:linkedin`}
                />
              </a>
            </li>
          </ul>
        </Flex>

        {/* <Modal isOpen={isSuccessModalOpen} onClose={handleSuccessModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Successful</ModalHeader>
          <ModalBody>
            Your registration was successful. You can now log in.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSuccessModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

        {/* Error Modal */}
        {/* <Modal isOpen={isErrorModalOpen} onClose={handleErrorModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Error</ModalHeader>
          <ModalBody>
            Registration was unsuccessful. Please try again later.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleErrorModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

        {/* Success Modal */}
        <RegistrationModal
          isOpen={isSuccessModalOpen}
          onClose={handleSuccessModalClose}
          isSuccess={true}
          isError={false}
        />

        {/* Error Modal */}
        <RegistrationModal
          isOpen={isErrorModalOpen}
          onClose={handleErrorModalClose}
          isSuccess={false}
          isError={true}
        />
      </Box>
    </Flex>
  );
};

export default Register;
