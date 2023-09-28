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
;

const Card = (props) => {
  return (
    <Box>
      <Box className="cc-container">
        <Grid
          templateColumns={{base:`repeat(1,1fr)`, lg:`repeat(3,auto)`}}
          justifyContent={`center`}
          alignItems={`center`}
          pos={`relative`}
          gap={{base:`2rem`, lg: `3.06rem` }}
          className={props.className}
        >
          <GridItem display={{base:`none`, lg:`block`}}>
            <Image
              src={props.img}
              pos={`absolute`}
              left={props.left}
              top={props.top}
              
            />
          </GridItem>

          <GridItem >
            <Text as={`span`} >{props.caption}</Text>
            <Heading fontSize={{base:`.875rem`}}mt={{base:`1rem`}} >{props.heading}</Heading>
            <Text
              fontSize={{base:`.75rem`, lg: `.875rem` }}
              lineHeight={{base:`1.2rem`, lg: `1.75rem` }}
              letterSpacing={{ lg: `.00625rem` }}
              // border={`1px solid red`}
              mr={{base:`2rem`, lg: `4rem` }}
              mt={{base:`1rem`}}
            >
              {props.desc}
            </Text>

            <Box mt={{base:`1rem`}}>
              <Button
                display={`flex`}
                alignItems={`center`}
                fontSize={{base:`.75rem`, lg:`1rem`}}
                justifyContent={`center`}
                gap={`1rem`}
                w={{base:`10rem`, lg: ` 14.86438rem` }}
                h={{base:`2.5rem`, lg: `5rem`}}
                p={{base: `1rem 0.9875rem 1rem 1rem` }}
                borderRadius={{ lg: `.4375rem` }}
                mt={{lg:`1.57rem`}}
              >
                <Icon icon="skill-icons:vscode-light"  width={{base:`70px`}}/>
                Visual Studio Code
              </Button>
              {/* <Button></Button>
              <Button></Button> */}
            </Box>
            {/* </Box> */}
          </GridItem>

          <GridItem>
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
