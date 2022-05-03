import MainBox from "@/layouts/box";
import Container from "@/layouts/container";
import { ContentWrapper } from "@/layouts/contentWrapper";
import { Button, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdOutlineTag } from "react-icons/md";
const Index = () => {
  return (
    <>
      <About />
    </>
  );
};

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <MainBox>

      </MainBox>
    </>
  );
};

export default Index;
