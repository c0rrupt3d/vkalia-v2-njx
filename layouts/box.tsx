import { chakra, Box, Flex } from "@chakra-ui/react";

import { VscTriangleDown } from "react-icons/vsc";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import React from "react";

const MainBox = ({ children }: any) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });



  const variants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "backInOut",
      },
    },
  };

  return (
    <>
      <ChakraBox
      variants={variants}
        initial="initial"
        animate="animate"
        w={{ base: "90%", "2xl": "70%" }}
        mt={{ base: "50px" }}
      >
        <Flex mb="4rem" justify="center" alignItems={"center"}>
          <Box w="100%">{children}</Box>
        </Flex>
      </ChakraBox>
    </>
  );
};

export default MainBox;
