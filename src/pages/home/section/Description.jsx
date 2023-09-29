import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../../../component/Card";
import blue_ellipse from "../../../assets/icons/blue_ellipse.svg";
import orange_ellipse from "../../../assets/icons/orange_ellipse.svg";

const Description = () => {
  return (
    <Box>
      <Box
        // color={`#1E1E1E`}
        className="html"
        py={{ base: `2rem`, lg: `0rem` }}
      >
        <Card
          img={blue_ellipse}
          left={`-1rem`}
          top={`3rem`}
          display={`none`}
          display1={`none`}
          bgColor={`blue.300`}
          color={`#fff`}
          caption="UNIT 1"
          heading="Introduction To Web Development"
          desc="This covers the basics of how the World Wide Web works, including an overview of the technologies used to create and display web pages. It offers a comprehensive overview of the web of technologies and protocols harnessed to craft, render, and present web content. You'll gain a deep understanding of markup languages such as HTML, CSS for styling, bootstrap, etc."
          image="https://res.cloudinary.com/dkszgtapy/image/upload/v1691824654/ef8cee473a4c1cb9b25c71c27a8c0331_hnj8jo.gif"
        />
      </Box>

      <Box
        bgColor={`#DCE9FA`}
        className="HTML"
        py={{ base: `2rem`, lg: `2rem` }}
      >
        <Card
          display={`flex`}
          display1={`none`}
          width={{ base: `5rem`, lg: ` 7.78625rem` }}
          height={{ base: `2.5rem`, lg: `5rem` }}
          img={orange_ellipse}
          left={`-1rem`}
          top={`1.2rem`}
          caption="UNIT 2"
          heading="HTML"
          desc="HTML (Hypertext Markup Language) is a core technology for creating web pages and is an essential component of web development. Students will learn how to use HTML to structure the content of a web page, including text, images, links, and more. Some topics covered here are HTML Elements, Document Structure, Semantic Markup, Links and Anchors, Images, Tables and Forms, and HTML Attributes."
          image="https://res.cloudinary.com/dkszgtapy/image/upload/v1695723770/HTML_lurzpg.gif"
          btn="HTML"
          icon="devicon:html5-wordmark"
        />
      </Box>

      <Box className="css" py={{ base: `2rem`, lg: `3rem` }}>
        <Card
          img={blue_ellipse}
          left={`-1rem`}
          top={`-.2rem`}
          caption="UNIT 3 "
          heading="CSS"
          desc="CSS (Cascading Style Sheets) is a technology used to control the visual style of a web page. Students will learn how to use CSS to control the layout, colors, fonts, and other visual aspects of a web page. Topics covered here includes CSS Selectors, Box Model, Display and Positioning, Colors and Backgrounds, Typography, CSS Grid and Flexbox, and Media QueriesBootstrap is a popular CSS framework that helps with responsive and mobile-first websites. Students learn how to use the Bootstrap framework to rapidly develop and style web pages. Here, we cover Grid System, UI Components, CSS Utilities, Customization, and Responsive Design."
          image="https://res.cloudinary.com/dkszgtapy/image/upload/v1695724281/css-document-file_tleehx.gif"
          btn="CSS"
          icon="logos:css-3"
          display={`flex`}
          display1={`none`}
          width={{ base: `5rem`, lg: ` 7.78625rem` }}
          height={{ base: `2.5rem`, lg: `5rem` }}
          bgColor={`blue.300`}
          color={`#fff`}
        />
      </Box>

      <Box
        bgColor={`blue.300`}
        color={`#fff`}
        className="bootstrap"
        py={{ base: `2rem`, lg: `3rem` }}
      >
        <Card
          img={orange_ellipse}
          left={`-1rem`}
          top={`1.2rem`}
          caption="UNIT 4"
          heading="Bootstrap"
          desc="Bootstrap is a popular CSS framework that helps with responsive and mobile-first websites. Students learn how to use the Bootstrap framework to rapidly develop and style web pages. Here, we cover Grid System, UI Components, CSS Utilities, Customization, and Responsive Design."
          image="https://res.cloudinary.com/dkszgtapy/image/upload/v1695724446/bootstrap_ycl7ae.gif"
          display={`flex`}
          display1={`none`}
          btn="Bootstrap"
          icon="logos:bootstrap"
          width={{ base: `8rem`, lg: ` 11.22754rem` }}
          height={{ base: `2.5rem`, lg: `5rem` }}
        />
      </Box>

      <Box className="design" py={{ base: `2rem`, lg: `3rem` }}>
        <Card
          img={blue_ellipse}
          left={`-1rem`}
          top={`2.2rem`}
          caption="UNIT 5"
          heading="Responsiveness Design"
          desc="Ensuring that a website display flawlessly on a diverse range of devices, spanning from traditional desktop computers to the ever-evolving landscape of smart phones and tablets, is paramount in today's digital age. In a world where technology is constantly advancing and user expectations are higher than ever, the ability to deliver an exceptional and consistent user experience across all screen sizes and resolutions is a fundamental requirement."
          image="https://res.cloudinary.com/dkszgtapy/image/upload/v1695974513/responsiveness_mgqo2k.gif"
          display={`none`}
          display1={`none`}
          bgColor={`blue.300`}
          color={`#fff`}
        />
      </Box>

      <Box
        className="git"
        bgColor={`#DCE9FA`}
        color={`blue.300`}
        py={{ base: `2rem`, lg: `3rem` }}
      >
        <Card
          img={orange_ellipse}
          left={`-1rem`}
          top={`-.2rem`}
          caption="UNIT 6"
          heading="Git & Github"
          desc="Git is a version control system that is widely used in software development to manage code changes and track the history of a project. In the Git course, we teach you how to use Git to manage your code and collaborate with others on a project. GitHub is a web-based platform that provides hosting for Git repositories and a set of tools for collaboration, issue tracking, and project management. Students learn how to use the platform to manage and collaborate on software development projects."
          image="https://res.cloudinary.com/dkszgtapy/image/upload/v1695457938/git_gknern.gif"
          icon="devicon:git"
          icon1="ant-design:github-outlined"
          btn="Git"
          button="Github"
          width={{ base: `5rem`, lg: ` 7.78625rem` }}
          height={{ base: `2.5rem`, lg: `5rem` }}
          width1={{ base: `8rem`, lg: ` 9.13875rem` }}
          height1={{ base: `2.5rem`, lg: `5rem` }}
          bgColor={`blue.300`}
          color={`#fff`}
        />
      </Box>
      <Box
        // color={`#1E1E1E`}
        className="html"
        py={{ base: `2rem`, lg: `3rem` }}
      >
        <Card
          img={blue_ellipse}
          left={`-1rem`}
          top={`.5rem`}
          // display={`none`}
          // display1={`none`}
          bgColor={`blue.300`}
          color={`#fff`}
          caption="UNIT 7"
          heading="Capstone Project"
          desc="In this unit, the project enables you to demonstrate multiple skills you have learned to develop a real life project. Students apply their web development skills to create a web application that is dynamic and real life worthy."
          image="https://res.cloudinary.com/dkszgtapy/image/upload/v1692269983/ui-ux-development_fqnykx.gif"
          btn="HTML"
          icon="devicon:html5-wordmark"
          button="CSS"
          icon1="logos:css-3"
          width={{ base: `8rem`, lg: ` 7.78625rem` }}
          height={{ base: `2.5rem`, lg: `5rem` }}
          width1={{ base: `8rem`, lg: ` 9.13875rem` }}
          height1={{ base: `2.5rem`, lg: `5rem` }}
        />
      </Box>
    </Box>
  );
};

export default Description;
