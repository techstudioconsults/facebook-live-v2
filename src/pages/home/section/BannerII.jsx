import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BannerII = () => {
  return (
    <Box as="section" mb={{ base: `5rem`, lg: `10.81rem` }}>
      <Box className="cc-container" mt={{ base: `5rem`, lg: `12.8rem` }}>
        <Box
          
          h={{ base: `15rem`, lg: `20.9375rem` }}
          bgColor={`blue.300`}
          borderRadius={`1.25rem`}
          pl={{ base: `3rem`, lg: `8.19rem` }}
          pr={{ base: `3rem`, lg: `8.12rem` }}
        >
          <Flex
            justify={{ base: `center`, lg: `space-between` }}
            align={`start
          `}
          >
            <Box mt={{ base: `4.5rem`, lg: `4.69rem` }}>
              <Text
                fontSize={{ base: `.875rem`, lg: `1rem` }}
                color={`white`}
                lineHeight={{ lg: ` 1.5rem` }}
              >
                Want to get started?
              </Text>
              <Heading
                fontSize={{ base: `1rem`, lg: `1.6875rem` }}
                fontWeight={{ lg: 700 }}
                lineHeight={{ base: `2rem`, lg: `3.75rem` }}
                letterSpacing={{ base: `.03125rem` }}
                mt={{ base: `1rem` }}
                color={`#fff`}
              >
                {" "}
                Sign Up with Techstudio
              </Heading>

              <Link to={`/register`}>
                <Button
                  fontSize={{ base: `.875rem` }}
                  fontWeight={600}
                  lineHeight={{ lg: `1.4rem` }}
                  letterSpacing={{ lg: `.0125rem` }}
                  w={{ base: `12rem`, lg: `14rem` }}
                  h={{ base: `2rem`, lg: `3rem` }}
                  bgColor={`blue.100`}
                  border={`none`}
                  borderRadius={`.375rem`}
                  display={`flex`}
                  justifyContent={`center`}
                  alignItems={`center`}
                  color={`white`}
                  mt={{ base: `1.5rem`, lg: `2.25rem` }}
                  _hover={{ bgColor: `blue.200` }}
                >
                  Click to Sign Up
                </Button>
              </Link>
            </Box>

            <Box
              style={{ translate: `0 -8.8rem` }}
              display={{ base: `none`, lg: `block` }}
            >
              <Image
                src="https://res.cloudinary.com/dkszgtapy/image/upload/v1695736331/Dayo_1_2_lg8wdw.png"
                w={{ lg: ` 26.125rem` }}
                h={{ lg: `29.77231rem` }}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerII;


  