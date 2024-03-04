import React from 'react';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

const Latest= () => {
  return (
    <>
      <Flex p={5}>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bl1.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">ocial Welfare Initiatives 2022 - A Look Back</Text>
          </a>
          <Box  bg="white" p={2}>
            <Text>Author: John Doe</Text>
            <Text>Published: March 1, 2024</Text>
          </Box>
        </Box>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bl2.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">Scaling Up With New Conviction: boAt Raises INR 500 Crore From</Text>
          </a>
          <Box  bg="white" p={2}>
            <Text>Author: John Doe</Text>
            <Text>Published: March 1, 2024</Text>
          </Box>
        </Box>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bl3.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">Imagine Marketing India Ranked Amongst The Top 5 Wearable</Text>
          </a>
          <Box  bg="white" p={2}>
            <Text>Author: John Doe</Text>
            <Text>Published: March 1, 2024</Text>
          </Box>
        </Box>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bp3.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">Social Welfare Initiatives 2022 - A Look Back</Text>
          </a>
          <Box  bg="white" p={2}>
            <Text>Author: John Doe</Text>
            <Text>Published: March 1, 2024</Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Latest;