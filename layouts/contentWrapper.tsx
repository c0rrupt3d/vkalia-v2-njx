import { VStack } from '@chakra-ui/layout';

export const ContentWrapper = ({ children }: any) => {
  return <VStack w="100%" spacing={{ base: '10rem', lg: '15rem' }}>{children}</VStack>;
};
