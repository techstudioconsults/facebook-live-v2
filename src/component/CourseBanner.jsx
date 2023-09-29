import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CourseBanner = () => {
  return (
    <Box
    // display={{base:`none`, lg:`block`}}
      w={{ lg: `67.75rem` }}
      h={{base:`13rem`, lg: `9.64135rem` }}
      m={`0 auto`}
      bgColor={`#fff`}
      p={{base:`1.5rem 5.4375rem 1.8rem 5.4375rem`, lg: `1.375rem 7.4375rem 1.39138rem 7.4375rem` }}
      borderRadius={`.52113rem`}
      boxShadow={`0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3.12692px 7.29615px 0px rgba(0, 0, 0, 0.10), 0px 13.55px 13.55px 0px rgba(0, 0, 0, 0.09), 0px 30.22692px 17.71923px 0px rgba(0, 0, 0, 0.05), 0px 53.15769px 20.84615px 0px rgba(0, 0, 0, 0.01), 0px 83.38461px 22.93077px 0px rgba(0, 0, 0, 0.00)`}
      className="cc-container"
      mt={{base:`6rem`, lg: `4.19rem` }}
     
    >
      <Flex justify={{base:`center`, lg:`flex-start`}} align={{base:`center`, lg:`flex-start`}}>
        <Text
         fontSize={{ lg: `.78175rem` }}
         fontWeight={700}
         lineHeight={{ lg: `1.59606rem` }}
         letterSpacing={{ lg: `.0065rem` }}
        >Enrolment Details</Text>
      </Flex>
      <Flex flexDir={{base:`column`, lg:`row`}} justify={{base:`center`, lg:`space-between`}} align={`center`}>
        <Box>
          <Heading
            color={`blue.200`}
            fontFamily={`Arial`}
            fontSize={{ lg: `2.0625rem` }}
            fontWeight={700}
            lineHeight={{base:`1.5rem`, lg: `2.61356rem` }}
            letterSpacing={{ base: `.0065rem` }}
          >
            June 14th, 2023
          </Heading>
          <Text
            fontSize={{ lg: `.78175rem` }}
            fontWeight={700}
            lineHeight={{ lg: `1.59606rem` }}
            letterSpacing={{ lg: `.0065rem` }}
          >
            Start Date
          </Text>
        </Box>

        <Box>
          <Heading
            color={`blue.200`}
            fontFamily={`Arial`}
            fontSize={{ lg: `2.0625rem` }}
            fontWeight={700}
            lineHeight={{ lg: `2.61356rem` }}
            letterSpacing={{ lg: `.0065rem` }}
          >
            Zoom (Online)
          </Heading>
          <Text
            fontSize={{ lg: `.78175rem` }}
            fontWeight={700}
            lineHeight={{ lg: `1.59606rem` }}
            letterSpacing={{ lg: `.0065rem` }}
          >
            Location
          </Text>
        </Box>

        <Box>
          <Heading
            fontFamily={`Arial`}
            color={`blue.200`}
            fontSize={{ lg: `2.0625rem` }}
            fontWeight={700}
            lineHeight={{ lg: `2.61356rem` }}
            letterSpacing={{ lg: `.0065rem` }}
          >
            100K
          </Heading>
          <Text
            fontSize={{ lg: `.78175rem` }}
            fontWeight={700}
            lineHeight={{ lg: `1.59606rem` }}
            letterSpacing={{ lg: `.0065rem` }}
          >
            {" "}
            Fee
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CourseBanner;
