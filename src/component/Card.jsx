import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";
const Card = (props) => {
  return (
    <Box>
      <Box className="cc-container">
        <Grid
          templateColumns={{ base: `repeat(1,1fr)`, lg: `repeat(3,auto)` }}
          justifyContent={`center`}
          alignItems={`center`}
          pos={`relative`}
          gap={{ base: `2rem`, lg: `3.06rem` }}
          className={` cc-container ${props.className}`}
        >
          <GridItem display={{ base: `none`, lg: `block` }}>
            <Image
              src={props.img}
              pos={`absolute`}
              left={props.left}
              top={props.top}
            />
          </GridItem>

          <GridItem>
            <Text as={`span`}>{props.caption}</Text>
            <Heading
              fontSize={{ base: `.875rem`, lg: `2.0625rem` }}
              fontWeight={700}
              lineHeight={{lg:`2.5075rem`}}
              letterSpacing={`.00625rem`}
              mt={{ base: `1rem` }}
            >
              {props.heading}
             </Heading>
             <GridItem display={{base:`block`, lg:`none`}}>
            <Image src={props.image} className="cc-container"/>
          </GridItem> 
            <Text
              fontSize={{ base: `.75rem`, lg: `.875rem` }}
              lineHeight={{ base: `1.2rem`, lg: `1.75rem` }}
              letterSpacing={{ lg: `.00625rem` }}
              // border={`1px solid red`}
              mr={{ base: `2rem`, lg: `4rem` }}
              mt={{ base: `1rem` }}
            >
              {props.desc}
            </Text>

            <Box
              mt={{ base: `1rem` }}
              display={`grid`}
              gridTemplateColumns={{
                base: `repeat(2,1fr)`,
                lg: `repeat(3,1fr)`,
              }}
              gap={`1rem`}
            >
              <Button
                display={`flex`}
                alignItems={`center`}
                fontSize={{ base: `.75rem`, lg: `1rem` }}
                justifyContent={`flex-start`}
                gap={{ base: `1rem`, lg: `1rem` }}
                w={{ base: `12rem`, lg: ` 14.86438rem` }}
                h={{ base: `2.5rem`, lg: `5rem` }}
                p={{ base: `.4rem`, lg: `1rem 0.9875rem 1rem 1rem` }}
                borderRadius={{ base: `.4375rem` }}
                mt={{ lg: `1.57rem` }}
                bgColor={props.bgColor}
                color={props.color}
                _hover={`none`}
              >
                <Box
                  as={Icon}
                  icon="skill-icons:vscode-light"
                  w={{ base: `30px`, lg: `70px` }}
                  h={{ base: `30px`, lg: `70px` }}
                />
                Visual Studio Code
              </Button>

              <Button
                display={props.display}
                alignItems={`center`}
                fontSize={{ base: `.75rem`, lg: `1rem` }}
                justifyContent={`flex-start`}
                gap={`1rem`}
                w={props.width}
                h={props.height}
                p={{ base: `.4rem`, lg: `1rem 0.9875rem 1rem 1rem` }}
                borderRadius={{ base: `.4375rem` }}
                mt={{ lg: `1.57rem` }}
                bgColor={props.bgColor}
                color={props.color}
                _hover={`none`}
              >
                <Box
                  as={Icon}
                  icon={props.icon}
                  w={{ base: `30px`, lg: `35.36px` }}
                  h={{ base: `30px`, lg: `49.98px` }}
                />
                {props.btn}
              </Button>

              <Button
                display={props.display1}
                alignItems={`center`}
                fontSize={{ base: `.75rem`, lg: `1rem` }}
                justifyContent={`flex`}
                gap={`1rem`}
                w={props.width1}
                h={props.height1}
                p={{ base: `.4rem`, lg: `1rem 0.9875rem 1rem 1rem` }}
                borderRadius={{ base: `.4375rem` }}
                mt={{ lg: `1.57rem` }}
                bgColor={props.bgColor}
                color={props.color}
                // mr={{lg:`9rem`}}
                pos={`relative`}
                left={{ lg: `-7rem` }}
                _hover={`none`}
                // border={`1px solid red`}
              >
                <Box
                  as={Icon}
                  icon={props.icon1}
                  w={{ base: `30px`, lg: `49px` }}
                  h={{ base: `30px`, lg: `49px` }}
                />
                {props.button}
              </Button>
            </Box>
            {/* </Box> */}
          </GridItem>

          <GridItem 
          display={{base:`none`, lg:`block`}}
          >
            <Image src={props.image} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Card;

{
  /* <Flex justify={`start`} align={`start`} gap={`2.6rem`}>
        <Box>
          <Image src={blue_ellipse}/>
        </Box>
        <Box>
          <Text>UNIT1</Text>
          <Heading>Introduction To Web Development</Heading>
          <Text>
            This covers the basics of how the World Wide Web works, including an
            overview of the technologies used to create and display web pages.
            It offers a comprehensive overview of the web of technologies and
            protocols harnessed to craft, render, and present web content.
            You'll gain a deep understanding of markup languages such as HTML,
            CSS for styling, bootstrap, etc.
          </Text>
          
          <Box>
            <Button><Icon icon="skill-icons:vscode-light" width="30" height="30" />Visual Studio Code</Button>
            <Button></Button>
            <Button></Button>
          </Box>
        </Box>

        <Box>
          <Image src="https://res.cloudinary.com/dkszgtapy/image/upload/v1691824654/ef8cee473a4c1cb9b25c71c27a8c0331_hnj8jo.gif"   />
        </Box>
      </Flex> */
}
