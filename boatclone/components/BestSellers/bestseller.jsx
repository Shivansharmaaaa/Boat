import { Flex, Box, Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

const Bestseller = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const products = [
    { id: 1, description: "EarBuds" },
    { id: 2, description: "NeckBands" },
    { id: 3, description: "Smart Watches" },
    { id: 4, description: "Wireless Speakers" },
    { id: 5, description: "Wireless Headphones" }
  ];

  const handleMouseEnter = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <Flex direction="column" align="center">
      <Text fontSize="2xl" fontWeight="normal" mt={4}>
        Explore <Text as="span" fontWeight="bold">BestSellers</Text> 
      </Text>
      <Flex overflowX="auto" mt={4}>
        <Box flexShrink={0} width="80%" display="flex">
          {products.map((product) => (
            <Box 
              key={product.id}
              flexShrink={0} 
              width="25%" 
              mr={product.id !== 5 ? 4 : 0} 
              textAlign="center"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredBox === product.id ? (
                <video width="100%" autoPlay loop muted>
                  <source src={`/video${product.id}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Box borderRadius={15} boxShadow="sm" overflow="hidden">
                  <Image src={`/image${product.id}.png`} alt={`Image ${product.id}`} width="100%" border="1px solid #E2E8F0" />
                </Box>
              )}
              <Text mt={2} textAlign="center"><strong>{product.description}</strong></Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Bestseller;
