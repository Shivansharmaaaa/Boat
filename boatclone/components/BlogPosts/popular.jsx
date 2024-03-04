import React from 'react';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

const Popular = () => {
  return (
    <>
      <Flex p={5}>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bp2.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">The Legacy Continues: Rockerz 255 ANC - Know What’s in Store for You!</Text>
          </a>
          <Box  bg="white" p={2}>
            <Text>Author: John Doe</Text>
            <Text>Published: March 1, 2024</Text>
          </Box>
        </Box>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bp1.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">Aman Gupta boAt (Shark Tank India 2) Age, Net worth, Email ID,</Text>
          </a>
          <Box  bg="white" p={2}>
            <Text>Author: John Doe</Text>
            <Text>Published: March 1, 2024</Text>
          </Box>
        </Box>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bp3.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">How Custom Watch Faces Enhance Your Daily Routine</Text>
          </a>
          <Box  bg="white" p={2}>
            <Text>Author: John Doe</Text>
            <Text>Published: March 1, 2024</Text>
          </Box>
        </Box>
        <Box position="relative" p={4} borderRadius="xl" mr={4} width="25%" textAlign="center">
          <Image src="/bp4.jpeg" alt="Image 1" width="100%" borderTopRadius={14} />
          <a href="https://www.boat-lifestyle.com/blogs/blog/the-power-of-personalisation-custom-watch-faces-in-wearables" target="_blank" rel="noopener noreferrer">
            <Text fontSize="xl" fontWeight="bold">The Power of Personalization: Custom Watch Faces in Wearables</Text>
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

export default Popular;