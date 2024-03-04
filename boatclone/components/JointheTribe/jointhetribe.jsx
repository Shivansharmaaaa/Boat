import React from 'react';
import { Box, Flex, Image, Text, Center } from '@chakra-ui/react';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Jointhetribe = () => {
  const videoStyle = {
    borderTopLeftRadius: '10%',
    borderTopRightRadius: '10%',
    overflow: 'hidden',
  };

  return (
    <Flex justifyContent="center">
      <Box p={10} textAlign="center" >
        <video style={videoStyle} width="100%" autoPlay loop muted>
          <source src="/v1.mp4" />
          Your browser does not support the video tag.
        </video>
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
        <video style={videoStyle} width="100%" autoPlay loop muted>
          <source src="/v4.mp4" />
          Your browser does not support the video tag.
        </video>
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
        <video style={videoStyle} width="100%" autoPlay loop muted>
          <source src="/v1.mp4" />
          Your browser does not support the video tag.
        </video>
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
        <video style={videoStyle} width="100%" autoPlay loop muted>
          <source src="/v4.mp4" />
          Your browser does not support the video tag.
        </video>
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
        <video style={videoStyle} width="100%" autoPlay loop muted>
          <source src="/v1.mp4" />
          Your browser does not support the video tag.
        </video>
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
    </Flex>
  );
};

export default Jointhetribe;