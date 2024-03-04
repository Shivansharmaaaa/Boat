import { Box, Flex, Image, Text, Center} from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Lifestyle = () => {
  return (
    <Flex justifyContent="center">
      <Box p={10} textAlign="center" >
        <Image src='/hardik.jpeg' maxW="100%" />
        <Box bg='lightgray' h={120}>
        <Text fontSize="2xl" fontWeight="normal" mt={4}>
          <Text as="span" fontWeight="bold">For Parties</Text> 
          <Text>View all </Text>
          <Center>
  <Box  h='100px' color='black'>
    <IoIosArrowDroprightCircle />
  </Box>
</Center>
        </Text>
        </Box>
      </Box>
      <Box p={10} textAlign="center" >
        <Image src='/bhabhi1.jpeg' maxW="100%" />
        <Box bg='lightgray' h={120}>
        <Text fontSize="2xl" fontWeight="normal" mt={4}>
          <Text as="span" fontWeight="bold">For Work</Text> 
          <Text>View all </Text>
          <Center>
  <Box  h='100px' color='black'>
    <IoIosArrowDroprightCircle />
  </Box>
</Center>
        </Text>
        </Box>
      </Box>
      <Box p={10} textAlign="center" >
        <Image src='/cricket.jpeg' maxW="100%" />
        <Box bg='lightgray' h={120}>
        <Text fontSize="2xl" fontWeight="normal" mt={4}>
          <Text as="span" fontWeight="bold">For Fitness</Text> 
          <Text>View all </Text>
          <Center>
  <Box  h='100px' color='black'>
    <IoIosArrowDroprightCircle />
  </Box>
</Center>
        </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Lifestyle;