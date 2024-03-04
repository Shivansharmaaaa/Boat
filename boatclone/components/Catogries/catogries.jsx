import { Flex, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Catogries = () => {
  return (
    <Flex direction="column" align="center">
      <Text fontSize="2xl" fontWeight="normal" mt={4} textAlign="center">
        Shop by <Text as="span" fontWeight="bold">Catogries</Text>
      </Text>
      <Flex>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image1.png" alt="Image 1" />
        <Text>Earbuds</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image2.png" alt="Image 2" />
        <Text>Neckband</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image3.png" alt="Image 3" />
        <Text>SmartWatch</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image4.png" alt="Image 4" />
        <Text>Speaker</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image5.png" alt="Image 5" />
        <Text>Headphone</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image1.png" alt="Image 6" />
        <Text>Earbuds</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image2.png" alt="Image 7" />
        <Text>Neckband</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image3.png" alt="Image 8" />
        <Text>SmartWatch</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center">
        <Image src="/image4.png" alt="Image 9" />
        <Text>Speaker</Text>
      </Box>
      <Box p={4} width="100%" textAlign="center" borderRadius={50}>
        <Image src="/image5.png" alt="Image 10" />
        <Text>Headphone</Text>
      </Box>
      </Flex>
    </Flex>
  );
};

export default Catogries;