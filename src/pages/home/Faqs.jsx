import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react';
import accordionData from '../../utils/Content.js';

const Faqs = () => {
  const renderAccordionContent = (content) => {
    if (typeof content === 'string') {
      return content;
    } else if (typeof content === 'object') {
      return Object.keys(content).map((key) => (
        <div key={key}>{content[key]}</div>
      ));
    }
    return null; // Handle other types of content if needed
  };

  return (
    <Box className="cc-container" mt={{ base: '3rem', lg: '4rem' }}>
      <Heading
        fontSize={{ base: `1rem`,lg:`2.25rem` }}
        textAlign={`center`}
        fontWeight={600}         mb={{ base: `2rem`, lg: `4.31rem` }}
         mt={{ base: `4rem`, lg: `8.8rem` }}
      >         Web Development FAQs
       </Heading>
      <Accordion
      //  defaultIndex={[0]} 
       allowMultiple
       >
        {accordionData.map((item) => (
          <AccordionItem key={item.id}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: '12.5px', lg: '1.25rem' }}
                  p={{ lg: '16px 20px' }}
                  ml={{ base: '-1rem', lg: '0' }}
                >
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              textAlign="start"
              fontSize={{ base: '12.5px', lg: '1.25rem' }}
              p={{ lg: '16px 20px' }}
              ml={{ base: '-1rem', lg: '1rem' }}
              fontWeight={500}
            >
              {renderAccordionContent(item.content)}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faqs;



{/* <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem> */}

















// import { useState } from "react";
// import { Box, Flex, Heading, Text } from "@chakra-ui/react";
// import React from "react";
// import { accordionData } from "../../utils/Content";
// import { Icon } from "@iconify/react";

// // const Accordion = ({ data }) => {
// //     return (
// //       <div>
// //         {data.map((item) => (
// //           <AccordionItem key={item.id} title={item.title} content={item.content} />
// //         ))}
// //       </div>
// //     );
// //   };

// //   const AccordionItem = ({ title, content }) => {
// //     return (
// //       <div>
// //         <h3>{title}</h3>
// //         {typeof content === "string" ? (
// //           <p>{content}</p>
// //         ) : (
// //           <ul>
// //             {Object.values(content).map((value, index) => (
// //               <li key={index}>{value}</li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     );
// //   };

// const Accordion = ({ data }) => {
//   const [openItems, setOpenItems] = useState({});

//   const toggleItem = (itemId) => {
//     setOpenItems((prevOpenItems) => ({
//       ...prevOpenItems,
//       [itemId]: !prevOpenItems[itemId],
//     }));
//   };

//   return (
//     <Box>
//       {data.map((item) => (
//         <AccordionItem
//           key={item.id}
//           title={item.title}
//           content={item.content}
//           isOpen={openItems[item.id]}
//           toggleItem={() => toggleItem(item.id)}
//         />
//       ))}
//     </Box>
//   );
// };

// const AccordionItem = ({ title, content, isOpen, toggleItem }) => {
//   return (
//     <Box>
//       <Flex
//         justify={`space-between`}
//         align={{ base: `start`, lg: `center` }}
//         // border={`1px solid red`}
//         // width={`100%`}
//       >
//         <Box>
//           <Text
//             onClick={toggleItem}
//             fontSize={{ base: `.875rem`, lg: `1.25rem` }}
//             lineHeight={{ lg: ` 3.005rem` }}
//             color={`#1E1E1E`}
//             mb={{ base: `1rem`, lg: `2rem` }}
//             style={{ cursor: "pointer" }}
//           >
//             {title}
//           </Text>
//         </Box>

//         <Box onClick={toggleItem}>
//           {isOpen ? (
//             <Box
//             as={Icon}
//             w={{ base: `20px`, lg: `30px` }}
//             h={{ base: `20px`, lg: `30px` }}
//             icon="fe:arrow-up"
//           />

//           ) : (
           
//             <Box
//             as={Icon}
//             w={{ base: `20px`, lg: `30px` }}
//             h={{ base: `20px`, lg: `30px` }}
//             icon="fe:arrow-down"
//           />
//           )}
//         </Box>
//       </Flex>

//       {/* Display a +/- icon */}
//       {isOpen && (
//         <Box>
//           {typeof content === "string" ? (
//             <Text
//               fontSize={{ base: `.875rem`, lg:`1.25rem` }}
//               mt={{ base: `-1rem`, lg: `-1.5rem` }}
//               mb={{ base: `.5rem` }}
//               w={{ base: `280px`, lg: `800px` }}
//             >
//               {content}
//             </Text>
//           ) : (
//             <Box
//               as={`ul`}
//               fontSize={{ base: `.875rem`, lg:`1.25rem` }}
//               style={{ listStyle: `none`, marginTop: `-1.5rem` }}
//             >
//               {Object.values(content).map((value, index) => (
//                 <Box as={`li`} mt={{ base: `.5rem` }} key={index}>
//                   {value}
//                 </Box>
//               ))}
//             </Box>
//           )}
//         </Box>
//       )}
//     </Box>
//   );
// };

// const Faqs = () => {
//   // const {title, content} = accordionData
//   return (
//     <Box className="cc-container">
//       <Heading
//         fontSize={{ base: `1rem`,lg:`2.25rem` }}
//         textAlign={`center`}
//         fontWeight={600}
//         mb={{ base: `2rem`, lg: `4.31rem` }}
//         mt={{ base: `4rem`, lg: `8.8rem` }}
//       >
//         Web Development FAQs
//       </Heading>

//       <Accordion data={accordionData} />
//     </Box>
//   );
// };

// export default Faqs;
