import {
  Box,
  Flex,
  useClipboard,
  useColorMode,
  chakra,
  VStack,
  Button,
  IconButton,
  HStack,
  useBreakpointValue,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import useToggle from "@/utils/hooks/useToggle";
import {
  MdOutlineCode,
  MdOutlineTag,
  MdShareLocation,
  MdWorkspaces,
} from "react-icons/md";

const Drawer = ({ open }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const customHeight = useBreakpointValue({ base: "60vh", md: "8rem" });

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });

  const parentVariants = {
    initial: {
      // opacity: 0,
      y: "0%",
      height: "0rem",
    },
    animate: {
      // opacity: 1,
      y: "0%",
      height: customHeight,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      // opacity: 0,
      y: "-0%",
      height: "0rem",
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    }


  return (
    <AnimatePresence>
      {open && (
        <ChakraBox
          variants={parentVariants}
          animate={"animate"}
          initial="initial"
          exit="exit"
          // boxShadow={"2xl"}
          // shadow="2xl"
          bg={colorMode === "light" ? "material.0" : "material.1"}
          w="100%"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
          // boxShadow = "1px 1px 33px 1px rgba(0,0,0,0.59) inset;"
        >
          <Flex
            w={{ base: "100vw", "2xl": "80vw", "3xl": "72vw" }}
            minH="100%"
            m="auto"
            alignItems={"center"}
            justifyContent="center"
          >
            <Flex>
              <Stack
              direction={{base: "column", md: "row"}}
                w="100%"
                justifyContent={"center"}
                alignItems="center"
                spacing={{ base: 4, md: 12 }}
                as="ul"
                align="center"
              >
                  <motion.div variants={childVariants}>
                  <Item
                    image={<MdOutlineTag />}
                    text="About"
                    variant="noStyle"
                    href="/"
                  ></Item>
                  </motion.div>
                  <motion.div variants={childVariants}>
                  <Item
                    image={<MdWorkspaces />}
                    text="Skills"
                    variant="noStyle"
                    href="/about"
                  ></Item>
                  </motion.div>
                  <motion.div variants={childVariants}>
                  <Item
                    image={<MdOutlineCode />}
                    text="Experience"
                    variant="noStyle"
                    href="/experience"
                  ></Item>
                  </motion.div>
                  <motion.div variants={childVariants}>
                  <Item
                    image={<MdShareLocation />}
                    text="Contact"
                    isExternal
                    variant="noStyle"
                    href="/"
                  ></Item>
                  </motion.div>
              </Stack>
            </Flex>
          </Flex>
        </ChakraBox>
      )}
    </AnimatePresence>
  );
};

const MenuIcon = ({ clicked }: any) => {
  // const { colorDark } = useColorModeSwitcher();
  return (
    <Box w="100%" h="100%" position="relative">
      <Line
        left={clicked ? "8px" : "4px"}
        // bg={colorDark}
        top={clicked ? "22px" : "16px"}
        transform={clicked ? "rotate(45deg)" : "none"}
        width={clicked ? "32px" : "40px"}
      />
      <Line
        left={clicked ? "8px" : "4px"}
        transform={clicked ? "rotate(-45deg)" : "none"}
        // bg={colorDark}
        bottom={clicked ? "22px" : "16px"}
        width={clicked ? "32px" : "16px"}
      />
    </Box>
  );
};

const Line = ({ ...props }) => {
  return (
    <Box
      {...props}
      borderRadius="1px"
      as="span"
      position="absolute"
      height="4px"
      transition="all 0.3s ease-in-out"
    />
  );
};

const Item = ({ text, image, href, ...props }: any) => {
  // const { colorGrey } = useColorModeSwitcher();
  //const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Stack
      direction={{base: "column", md: "row"}}
      align="center"
      pb={{ base: 4, lg: 0 }}
      w="100%"
      as="li"
      listStyleType="none"
      // borderBottom={{ base: "1px solid", lg: "none" }}
      // borderColor={colorGrey}
    >
      <Button variant="header_invert">
        <VStack>
          <Flex>{image}</Flex>
          <Flex>{text}</Flex>
        </VStack>
      </Button>
    </Stack>
  );
};

export default Drawer;
