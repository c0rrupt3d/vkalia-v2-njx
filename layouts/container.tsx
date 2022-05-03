import { Box, VStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import Head from 'next/head';
import useToggle from '@/utils/hooks/useToggle';
import Header  from '@/components/header';
import Footer  from '@/components/footer';
import Drawer from '@/components/drawer';

const Container = ({ children, ...customMeta } : any) => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <Box>
      {/* <Seo {...customMeta} /> */}
      {/* <Button
        variant="secondary"
        as="a"
        href="#skip"
        position="absolute"
        transform="translateX(-100%)"
        transition="transform 0.3s"
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip to Content
      </Button> */}
        <Drawer toggle={toggleIsOpen} open={isOpen}/>
      <Box
        w={{ base: '100vw', '2xl': '72vw', '3xl': '65vw' }}
        minH="100vh"
        m="auto"
      >

        <Header toggle={toggleIsOpen} open={isOpen} />
        <VStack spacing={{ base: '8rem', lg: '10rem' }} id="skip" as="main">
          {children}
          <Footer />
        </VStack>
      </Box>
    </Box>
  );
};

// const Seo = ({ ...customMeta }) => {
//   const meta = {
//     title: 'Vastav Kalia - Developer',
//     description:
//       'Developer and designer based in the India. I love to create and build highly scalable, maintainable and interactive things.',
//     image: 'https://vkalia.com/static/images/banner.png',
//     type: 'website',
//     ...customMeta
//   };

//   return (
//     <Head>
//       <title>{meta.title}</title>
//       <meta content={meta.description} name="description" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//   );
// };

export default Container;
