import { Box, Flex, Image,Text } from '@chakra-ui/react'
import React from 'react'

const Features = () => {
  return <>
  <Flex ml={70}>
    <Box p={10}>
        <Image src='/warranty.jpeg'/ >
        <Text fontSize="2xl" fontWeight="normal" mt={4} textAlign="center">
        <Text as="span" fontWeight="bold">1 Year</Text> Warranty
        </Text>
    </Box>
    <Box p={10}>
        <Image src='/replace.jpeg'/>
        <Text fontSize="2xl" fontWeight="normal" mt={4} textAlign="center">
        <Text as="span" fontWeight="bold">7 Day</Text> Replacement
        </Text>
    </Box>
    <Box p={10}>
        <Image src='/delivery.jpeg'/>
        <Text fontSize="2xl" fontWeight="normal" mt={4} textAlign="center">
        <Text as="span" fontWeight="bold">Free</Text> Shipping
        </Text>
    </Box>
    <Box p={10}>
        <Image src='/bill.jpeg'/>
        <Text fontSize="2xl" fontWeight="normal" mt={4} textAlign="center">
        <Text as="span" fontWeight="bold">GST</Text> billing
        </Text>
    </Box>
  </Flex>
  </>
}

export default Features