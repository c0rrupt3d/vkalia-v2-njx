import Container from "@/layouts/container";
import { ContentWrapper } from "@/layouts/contentWrapper";
import { chakra, Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "@/components/about/index";
import {VscTriangleDown} from "react-icons/vsc";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Vastav Kalia - Developer</title>
      </Head>
      <Container>
        <ContentWrapper>
          <Hero/>
          <About/>
        </ContentWrapper>
      </Container>
    </>
  );
};



export default Home;
