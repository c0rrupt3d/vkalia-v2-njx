// import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from "@/utils/hooks/useToggle";
import { IconButton } from "@chakra-ui/button";
import { chakra, Box, HStack, Flex, useColorMode } from "@chakra-ui/react";
import { Icon, Image, Button, Drawer } from "@chakra-ui/react";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { CgMenuGridO, CgClose } from "react-icons/cg";
// import { StyledLink } from '../styled/link';
import { Logo } from "@/components/svg";
import MakeDrawer from "../drawer";
import React from "react";

const Header = ({ open, toggle }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [drawer, isDrawer] = React.useState(true);
  // const { colorDark } = useColorModeSwitcher();

  const ChakraDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });

  function handleTheme() {
    toggleColorMode();
    {
      open ? toggle() : null;
    }
  }
  return (
    <>
      <Flex mb={"1rem"} as="nav" p="4" justify="space-between" >
        <Box
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(0.9)" }}
          boxSize={"3rem"}
          cursor="pointer"
        >
          <Image
            rounded="lg"
            src={
              colorMode === "light"
                ? "/assets/img/logob.png"
                : "/assets/img/logow.png"
            }
            alt="VK"
          />
        </Box>
        <HStack spacing={{ base: 0, md: 8 }}>
          <Button onClick={toggle} size={"lg"} variant="header">
            {open ? <CgClose size="1.75rem" /> : <CgMenuGridO size="1.75rem" />}
          </Button>
          <IconButton
            id="toggleTheme"
            variant="theme"
            onClick={handleTheme}
            aria-label={
              colorMode === "light" ? "Toggle dark mode" : "Toggle light Mode"
            }
            icon={
              colorMode === "light" ? (
                <IoMdMoon size="1.25rem" />
              ) : (
                <MdOutlineWbSunny size="1.25rem" />
              )
            }
          />
        </HStack>
      </Flex>
    </>
  );
};

export default Header;
