import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CourseBanner = () => {
  return (
    <Box
    // display={{base:`none`, lg:`block`}}
      w={{base:`375px`, lg: `67.75rem` }}
      h={{base:`20rem`, lg: `9.64135rem` }}
      m={`0 auto`}
      bgColor={`#fff`}
      p={{base:`1.5rem 5.4375rem 1.8rem 5.4375rem`, lg: `1.375rem 7.4375rem 1.39138rem 7.4375rem` }}
      borderRadius={`.52113rem`}
      boxShadow={`0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3.12692px 7.29615px 0px rgba(0, 0, 0, 0.10), 0px 13.55px 13.55px 0px rgba(0, 0, 0, 0.09), 0px 30.22692px 17.71923px 0px rgba(0, 0, 0, 0.05), 0px 53.15769px 20.84615px 0px rgba(0, 0, 0, 0.01), 0px 83.38461px 22.93077px 0px rgba(0, 0, 0, 0.00)`}
      className="cc-container"
      mt={{base:`2rem`, lg: `4.19rem` }}
     
    >
      <Flex justify={{base:`center`, lg:`flex-start`}} align={{base:`flex-start`, lg:`flex-start`}}>
        <Text
         fontSize={{ lg: `.78175rem` }}
         fontWeight={700}
         lineHeight={{ lg: `1.59606rem` }}
         letterSpacing={{ lg: `.0065rem` }}
        >Enrolment Details</Text>
      </Flex>
      <Flex flexDir={{base:`column`, lg:`row`}} justify={{base:`center`, lg:`space-between`}} align={{base:`flex-start`, lg:`center`}}>
        <Box>
          <Heading
            color={`blue.200`}
           
            fontSize={{base:`24px`, lg: `2.0625rem` }}
            fontWeight={700}
            lineHeight={{base:`1.5rem`, lg: `2.61356rem` }}
            letterSpacing={{ base: `.0065rem` }}
            whiteSpace={`nowrap`}
            marginBlock={{base:`1rem`, lg:`0`}}
          >
            June 14th, 2023
          </Heading>
          <Text
            fontSize={{ lg: `.78175rem` }}
            fontWeight={700}
            lineHeight={{ lg: `1.59606rem` }}
            letterSpacing={{ lg: `.0065rem` }}
            textAlign={{base:`center`}}
          >
            Start Date
          </Text>
        </Box>

        <Box>
          <Heading
            color={`blue.200`}
           
            fontSize={{base:`24px`, lg: `2.0625rem` }}
            fontWeight={700}
            lineHeight={{ lg: `2.61356rem` }}
            letterSpacing={{ lg: `.0065rem` }}
            marginBlock={{base:`1rem`, lg:`0`}}
          >
            Zoom (Online)
          </Heading>
          <Text
            fontSize={{ lg: `.78175rem` }}
            fontWeight={700}
            lineHeight={{ lg: `1.59606rem` }}
            letterSpacing={{ lg: `.0065rem` }}
            textAlign={{base:`center`}}
          >
            Location
          </Text>
        </Box>

        <Box display={{base:`block`, lg:`block`}} justifyContent={{base:`center`, lg:`none`}} m={{base:`0 auto`, lg:`0`}}>
          <Heading
            
            color={`blue.200`}
            fontSize={{base:`24px`, lg: `2.0625rem` }}
            fontWeight={700}
            lineHeight={{ lg: `2.61356rem` }}
            letterSpacing={{ lg: `.0065rem` }}
            marginBlock={{base:`1rem`, lg:`0`}}
            // textAlign={{base:`center`}}
            // disolay={{base:`grid`, lg:`block`}}
            // placeItems={{base:`center`}}
          >
            100K
          </Heading>
          <Text
            fontSize={{ lg: `.78175rem` }}
            fontWeight={700}
            lineHeight={{ lg: `1.59606rem` }}
            letterSpacing={{ lg: `.0065rem` }}
            textAlign={{base:`center`}}
        
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
