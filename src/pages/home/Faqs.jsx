import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { accordionData } from "../../utils/Content";
import { Icon } from "@iconify/react";

// const Accordion = ({ data }) => {
//     return (
//       <div>
//         {data.map((item) => (
//           <AccordionItem key={item.id} title={item.title} content={item.content} />
//         ))}
//       </div>
//     );
//   };

//   const AccordionItem = ({ title, content }) => {
//     return (
//       <div>
//         <h3>{title}</h3>
//         {typeof content === "string" ? (
//           <p>{content}</p>
//         ) : (
//           <ul>
//             {Object.values(content).map((value, index) => (
//               <li key={index}>{value}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };

const Accordion = ({ data }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemId) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [itemId]: !prevOpenItems[itemId],
    }));
  };

  return (
    <Box>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItems[item.id]}
          toggleItem={() => toggleItem(item.id)}
        />
      ))}
    </Box>
  );
};

const AccordionItem = ({ title, content, isOpen, toggleItem }) => {
  return (
    <Box>
      <Flex
        justify={`space-between`}
        align={{base:`start`, lg:`center`}}
        // border={`1px solid red`}
        // width={`100%`}
      >
        <Box>
          <Text
            onClick={toggleItem}
            fontSize={{ base: `.875rem`, lg: `1.6875rem` }}
            lineHeight={{ lg: ` 3.005rem` }}
            color={`#1E1E1E`}
            mb={{base:`1rem`, lg: `2rem` }}
            style={{ cursor: "pointer" }}
          >
            {title}
          </Text>
        </Box>

        <Box onClick={toggleItem}>
          {isOpen ? (
            <Icon icon="fe:arrow-down" width="20" height="20" />
          ) : (
            <Icon icon="fe:arrow-up" width="30" height="30" />
          )}
        </Box>
      </Flex>

      {/* Display a +/- icon */}
      {isOpen && (
        <Box>
          {typeof content === "string" ? (
            <Text
            fontSize={{base:`.875rem`}}
              mt={{base:`-1rem`, lg: `-1.5rem` }}
              mb={{ base: `.5rem` }}
              w={{base:`280px`, lg: `800px` }}
             
            >
              {content}
            </Text>
          ) : (
            <Box as={`ul`}  fontSize={{base:`.75rem`}}
           
            
            style={{ listStyle: `none`, marginTop: `-1.5rem` }}>
              {Object.values(content).map((value, index) => (
                <Box as={`li`} mt={{base:`.5rem`}} key={index}>{value}</Box>
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

const Faqs = () => {
  // const {title, content} = accordionData
  return (
    <Box className="cc-container">
      <Heading
        fontSize={{ base: `1rem` }}
        textAlign={`center`}
        mb={{ base: `2rem`, lg: `4.31rem` }}
        mt={{ base: `4rem`, lg: `8.8rem` }}
      >
        Web Development FAQs
      </Heading>

      <Accordion data={accordionData} />
    </Box>
  );
};

export default Faqs;
