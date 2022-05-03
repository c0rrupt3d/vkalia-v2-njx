import {
  chakra,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  Button,
  GridItem,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";

import { VscTriangleDown } from "react-icons/vsc";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import MainBox from "@/layouts/box";
import { IoScanSharp } from "react-icons/io5";
import {
  MdOutlineCode,
  MdOutlineTag,
  MdShareLocation,
  MdWorkspaces,
  MdOutlineArrowRightAlt,
} from "react-icons/md";
import Skill from "../skill";

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ScrollBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });

  const scrollVariants = {
    animate: {
      opacity: [0, 1, 0],
      y: [0, 15, 40],
      transition: {
        delay: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "backInOut",
        duration: 1.5,
        repeatDelay: 2.3,
      },
    },
  };

  return (
    <>
      <MainBox>
        <Text as="h2" variant="subtitle">
          🙏 Namaste, I am
        </Text>
        <Flex>
          <Heading mb="0.5rem" as="h1" variant="title">
            Vastav Kalia {/* <span>_</span> */}
          </Heading>
          {/* <Flex
            display={"absolute"}
            opacity="0.5"
            height={{ base: "32px", lg: "55px" }}
          >
            <IoScanSharp size="100%" />
          </Flex> */}
        </Flex>

        {/* <Heading mb="0.5rem" as="h1" variant="alt_title">
              Sometimes a Gamer
            </Heading> */}
        <Text as="h2" variant="subtitle">
          A developer working towards creating more accessible, usable and
          modern web experiences. Operating remotely from New Delhi, India.
        </Text>
        <Flex
          textAlign={"center"}
          flexDirection="column"
          justifyContent={"center"}
          alignContent="center"
          mx="auto"
        >
          {/* Sroll Down */}
          <ScrollBox
            justifyContent={"center"}
            alignContent="center"
            mx="auto"
            variants={scrollVariants}
            animate="animate"
          >
            <VscTriangleDown size="35px" />
          </ScrollBox>
        </Flex>
      </MainBox>
      <MainBox>
        <Flex>
          <Heading as="h1" variant="title">
            About Me
          </Heading>
          <Flex
            display={"absolute"}
            opacity="0.5"
            height={{ base: "32px", lg: "55px" }}
          >
            <MdOutlineTag size="100%" />
          </Flex>
        </Flex>
        <Text as="p" variant={"subtitle"}>
          <i>
            &quot;Those who stop being <b>curious</b> can never be
            successful&quot;
          </i>
          <br />
          <br />
          Creating experiences that bring the world of pixels and people
          together is where my passion lies. I like a challenge. I yearn for the
          curiosity in crafting something unique.
        </Text>
        <Button
          rightIcon={<MdOutlineArrowRightAlt size="1.25rem" />}
          variant="main"
        >
          Learn More
        </Button>
      </MainBox>
      <MainBox>
        <Flex>
          <Heading as="h1" variant="title">
            Skillset
          </Heading>
          <Flex
            display={"absolute"}
            opacity="0.5"
            height={{ base: "32px", lg: "55px" }}
          >
            <MdWorkspaces size="100%" />
          </Flex>
        </Flex>
        <Text as="p" variant={"subtitle"}>
          Over three years ago I started learning the basics of web development
           and styling using HTML, CSS and Javascript. {/*Since then, I&apos;ve
          been steadily improving my skills and learning new libraries, methods
          and techniques.*/} Today I can prototype an idea and build it from
          scratch, <b>end-to-end</b>.
        </Text>
        <SimpleGrid columns={{base: 3, md:4,  lg: 5}} spacing={4}>
            <Skill/>
        </SimpleGrid>
      </MainBox>
    </>
  );
};


export default Hero;
