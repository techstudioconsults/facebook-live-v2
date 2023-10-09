import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <Box
      bgColor={`blue.300`}
      h={{base:`auto`, lg: `26.5625rem` }}
      pt={{base:`2.5rem`, lg: `4rem` }}
      pb={{base:`2rem`, lg: `3.5rem` }}
    >
      <Box
        className="cc-container"
        borderBottom={`1px solid #fff`}
        pb={{base:`1.5rem`, lg: `3.69rem` }}
      >
        <Grid
          templateColumns={{base:`repeat(1, 1fr)`,lg:`repeat(4, 1fr)`}}
          fontSize={{ base: `.875rem` }}
          color={`#fff`}
          // alignItems={`center`}
          // justifyContent={`start`}
        >
          <GridItem>
            <Image
              src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218525/techstudio-web-app/assets/images/logo_white_text_new_2_fmjlzq.png"
              
            />
            <Text 
            mt={{base:`1rem`, lg: `1.14rem` }}
            mr={{base:`2rem`, lg:`0`}}
            
            >
              1, Ogunlesi Street, Awoyokun Bus Stop, Onipanu, Lagos.
            </Text>
          </GridItem>

          <GridItem
          _hover={{color:`orange`}}
          >
            <Heading 
            color={`#fff`} 
            fontSize={{ lg: `1rem` }}
            mt={{base:`2rem`, lg:`0`}}
            >
              Courses
            </Heading>
            <Text mt={{base:`1rem`, lg: `1.14rem` }}>Front End Development</Text>
            <Text my={{ base: `.75rem` }}>Android Development</Text>
            <Text>UI/UX Design</Text>
            <Text my={{ base: `.75rem` }}>Full Stack Development</Text>
            <Text>Data Science</Text>
          </GridItem>
          <GridItem 
           _hover={{color:`orange`}}
          >
            <Heading 
            color={`#fff`} 
            fontSize={{ lg: `1rem` }}
            mt={{base:`2rem`, lg:`0`}}
            
            >
              About Us
            </Heading>
            <Text my={{ base: `.75rem` }}>Blog</Text>
            <Text>Partnership</Text>
            <Text my={{ base: `.75rem` }}>FAQs</Text>
            <Text>Privacy Policy</Text>
            <Text my={{ base: `.75rem` }}>Contact Us</Text>
          </GridItem>
          <GridItem>
            <Heading
              color={`#fff`}
              fontSize={{ lg: `1rem` }}
              mb={{ lg: `.88rem` }}
              mt={{base:`2rem`, lg:`0`}}
            >
              Subscribe to our newsletter
            </Heading>
            <FormControl pos={`relative`}>
              <Input
                type="email"
                placeholder="Email Address"
                display={`flex`}
                justifyContent={`center`}
                alignItems={`center`}
                p={{ base: `0.625rem 0.6875rem` }}
                gap={{ lg: `7.3125rem` }}
                borderRadius={{ base: `.3125rem` }}
                bgColor={`#fff`}
                h={{base:`2.5rem`, lg: `3rem` }}
              />
              <Button
                disabled
                type="button"
                display={`flex`}
                gap={{ lg: `.3rem` }}
                bgColor={`#0266F4`}
                color={`#fff`}
                // w={{lg:`6.625rem`}}
                h={{base:`2rem`, lg: `1.75rem` }}
                fontSize={{ base: `.75rem` }}
                lineHeight={{ lg: `1.125rem` }}
                borderRadius={`none`}
                border={`none`}
                pos={`absolute`}
                top={{ base:`.3rem`, lg: `.8rem` }}
                right={{ base:`.4rem`, lg: `1.2rem` }}
                _hover={{background:`blue.300`}}
              >
                Subscribe
                <Icon
                  icon="ic:sharp-arrow-forward"
                  color="white"
                  width="16"
                  height="15"
                  // style={{marginRight: `1rem`}}
                />
              </Button>
            </FormControl>
          </GridItem>
        </Grid>

        
      </Box>

      <Flex
      flexDir={{base:`column`, lg:`row`}}
        color={`#fff`}
        align={`center`}
        gap={{base:`1rem`, lg: `2rem` }}
        justify={`flex-end`}
        mt={{base:`1rem`, lg: `1.94rem` }}
        className="cc-container"
      >
        <Text lineHeight={{ lg: `1.8rem` }} letterSpacing={{ lg: `.0125rem` }}>
          &copy; {new Date().getFullYear()} TechStudio Academy
        </Text>
        <ul
          style={{
            display: `flex`,
            alignItems: `center`,
            gap: `1rem`,
            listStyle: `none`,
          }}
        >
          <li className="">
            <a
              target={`_blank`}
              href="https://twitter.com/techstudioacdmy"
              className="text-white cc-link-hover"
            >
              <Icon icon={`fa:twitter`}  />
            </a>
          </li>
          <li className="">
            <a
              target={`_blank`}
              href="https://facebook.com/techstudioacademy"
              className="text-white cc-link-hover "
            >
              <Icon icon={`fa:facebook`} />
            </a>
          </li>
          <li className="">
            <a
              target={`_blank`}
              href="https://instagram.com/techstudioacademy"
              className="text-white cc-link-hover "
            >
              <Icon icon={`fa:instagram`} />
            </a>
          </li>

          <li className="">
            <a
              target={`_blank`}
              href="https://linkedin.com/company/tech-studio-academy"
              className="text-white cc-link-hover "
            >
              <Icon icon={`fa:linkedin`} />
            </a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};

export default Footer;
