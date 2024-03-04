import { Flex, Box, Image, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { StarIcon } from '@chakra-ui/icons';
const Tabtwo = () => {
  return <>
  <Flex p={5}>
      <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
        <Image src="/homet1.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
        <Box position="absolute" bottom={0} left={0} right={0} bg="white" p={2}>
          <Text>Nirvana Ion</Text>
          <del>$50.00</del> $30.00
          <Box bgColor="black" color="white" p={2} mt={2}>
            <Text>Add To Cart</Text>
          </Box>
          <Text>
            <StarIcon color="gold" />
            <Text as="span" ml={1}>4.5/5</Text>
          </Text>
        </Box>
      </Box>
      <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
        <Image src="/homet2.jpeg" alt="Image 2" width="100%" borderTopRadius={14} />
        <Box position="absolute" bottom={0} left={0} right={0} bg="white" p={2}>
          <Text>Product Name 2</Text>
          <del>$60.00</del> $40.00
          <Box bgColor="black" color="white" p={2} mt={2}>
            <Text>Add To Cart</Text>
          </Box>
          <Text>
            <StarIcon color="gold" />
            <Text as="span" ml={1}>4.8/5</Text>
          </Text>
        </Box>
      </Box>
      <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
        <Image src="/homet3.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
        <Box position="absolute" bottom={0} left={0} right={0} bg="white" p={2} >
          <Text>Nirvana Ion</Text>
          <del>$50.00</del> $30.00
          <Box bgColor="black" color="white" p={2} mt={2} >
            <Text>Add To Cart</Text>
          </Box>
          <Text>
            <StarIcon color="gold" />
            <Text as="span" ml={1}>4.5/5</Text>
          </Text>
        </Box>
      </Box>
      <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
        <Image src="/homet4.jpeg" alt="Image 2" width="100%" borderTopRadius={14} />
        <Box position="absolute" bottom={0} left={0} right={0} bg="white" p={2}>
          <Text>Product Name 2</Text>
          <del>$60.00</del> $40.00
          <Box bgColor="black" color="white" p={2} mt={2}>
            <Text>Add To Cart</Text>
          </Box>
          <Text>
            <StarIcon color="gold" />
            <Text as="span" ml={1}>4.8/5</Text>
          </Text>
        </Box>
      </Box>

    </Flex>
  </>
}

export default Tabtwo