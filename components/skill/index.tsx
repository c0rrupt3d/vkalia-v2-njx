import { Box, Flex, Tooltip, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const Skill = () => {
  const skills = [
    {
      imgLight: "/assets/icon/light/nextjs.svg",
      imgDark: "/assets/icon/dark/nextjs.svg",
      name: "NextJS",
    },
    {
      imgLight: "/assets/icon/light/react.svg",
      imgDark: "/assets/icon/dark/react.svg",
      name: "ReactJS",
    },
    {
      imgLight: "/assets/icon/light/javascript.svg",
      imgDark: "/assets/icon/dark/javascript.svg",
      name: "JavaScript",
    },
    {
      imgLight: "/assets/icon/light/css-3.svg",
      imgDark: "/assets/icon/dark/css-3.svg",
      name: "CSS",
    },
    {
      imgLight: "/assets/icon/light/redux.svg",
      imgDark: "/assets/icon/dark/redux.svg",
      name: "Redux/ State Management",
    },
    {
      imgLight: "/assets/icon/light/nodejs.svg",
      imgDark: "/assets/icon/dark/nodejs.svg",
      name: "NodeJS",
    },
    {
      imgLight: "/assets/icon/light/sass.svg",
      imgDark: "/assets/icon/dark/sass.svg",
      name: "SASS",
    },
    {
      imgLight: "/assets/icon/light/terminal.svg",
      imgDark: "/assets/icon/dark/terminal.svg",
      name: "Terminal/ Bash",
    },
    {
      imgLight: "/assets/icon/light/typescript.svg",
      imgDark: "/assets/icon/dark/typescript.svg",
      name: "TypeScript",
    },
    {
      imgLight: "/assets/icon/light/insomnia.svg",
      imgDark: "/assets/icon/dark/insomnia.svg",
      name: "Insomnia",
    },
    {
      imgLight: "/assets/icon/light/git.svg",
      imgDark: "/assets/icon/dark/git.svg",
      name: "Git",
    },
    {
      imgLight: "/assets/icon/light/es6.svg",
      imgDark: "/assets/icon/dark/es6.svg",
      name: "ES6",
    },
    {
      imgLight: "/assets/icon/light/framer.svg",
      imgDark: "/assets/icon/dark/framer.svg",
      name: "Framer Motion",
    },

    // {
    //   imgLight: "/assets/icon/light/momentjs.svg",
    //   imgDark: "/assets/icon/dark/momentjs.svg",
    //   name: "MomentJS",
    // },
    {
      imgLight: "/assets/icon/light/preact.svg",
      imgDark: "/assets/icon/dark/preact.svg",
      name: "Preact",
    },
    {
      imgLight: "/assets/icon/light/tailwindcss.svg",
      imgDark: "/assets/icon/dark/tailwindcss.svg",
      name: "TailwindCSS",
    },
  ];

  return skills.map((skill, index) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <>
      <Box key={index} mx="auto">
        <Flex
          textAlign={"center"}
          alignItems={"center"}
          justifyContent="center"
          borderRadius="15px"
          flexDirection={"column"}
          padding="20px"
        >
          <Tooltip gutter={12} bg={colorMode === "light" ? "material.0" : "material.1"} color={colorMode === "light" ? "material.1" : "material.0"} label={skill.name} aria-label={`Tooltip says ${skill.name}`}>
          <Box
            cursor="pointer"
            transition="0.3s all ease-in-out"
            as="img"
            w={{base: "38px", md: "46px"}}
            h={{base: "38px", md: "46px"}}
            m={{base: "25px", md: "30px"}}
            
            src={colorMode === "light" ? skill.imgDark : skill.imgLight}
            alt={skill.name}
          />
          </Tooltip>
          {/* <Text mt="4" color={"material.0"}>
            {skill.name}
          </Text> */}
        </Flex>
      </Box>
      </>
    );
  });
};

export default Skill;
