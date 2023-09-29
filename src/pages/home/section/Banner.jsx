import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box as="section">
      <Box className="cc-container"
      mt={{base:`5rem`, lg:`8.8rem`}}
      mb={{base:`4rem`}}
      >
        <Box
          w={{ lg: `75.6875rem` }}
          h={{base:`19rem`, lg: `26.375rem` }}
          bgColor={`blue.300`}
          borderRadius={`1.25rem`}
          
          pl={{base:`2rem`, lg: `8.19rem` }}
          pr={{base:`1.9rem`, lg: `8.12rem` }}
        >
          <Heading
            color={`#fff`}
            fontSize={{base:`.875rem`, lg: `2.0625rem` }}
            textAlign={`center`}
            fontWeight={600}
            pt={{base:`2rem`, lg: `4.38rem` }}
          >
            Are you ready to unlock the world of web development and embark on
            an exciting journey towards becoming a Frontend Developer?
          </Heading>
          <Text
            fontSize={{base:`.875rem`, lg: `1.0625rem` }}
            color={`#fff`}
            w={{ lg: `50.375rem` }}
            textAlign={`center`}
            mx={{ lg: `3rem` }}
            lineHeight={{base:`1.5rem`, lg: `1.941rem` }}
            mt={`1.12rem`}
            fontWeight={400}
          >
            Look no further – our comprehensive online course is your gateway to
            mastering the art of creating captivating websites and engaging
            landing pages.
          </Text>

          <Link to={`/register`}>
          <Button
          fontSize={{base:`.875rem`, lg:`1rem`}}
            w={{base:`15rem`, lg: `16.1875rem` }}
            h={{base:`2rem`, lg: `2.4375rem` }}
            bgColor={`blue.100`}
            border={`none`}
            borderRadius={`.375rem`}
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            margin={`0 auto`}
            color={`white`}
            mt={{base:`1.5rem`, lg: `2.31rem` }}
          >
            Begin Registration Now
          </Button>

          </Link>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
