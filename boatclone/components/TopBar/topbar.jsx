import React, { useState } from 'react';
import { Flex, Box, Image, Input } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Topbar = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleAccordionHover = (index) => {
    setActiveAccordion(index);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Flex alignItems="center" position="sticky" zIndex="100" borderBottom="1px solid #e2e8f0" top={0} bg="white"> 
      <Box h={70} w={120} pl={10} marginTop={16}>
        <Image src="/logobgr.png" alt="Logo" />
      </Box>
      <Box marginTop={6} pl={10} display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'tomato', color: 'white' }}
                  borderBottom={activeAccordion === 0 ? '2px solid black' : 'none'}
                  onMouseEnter={() => handleAccordionHover(0)}
                  onMouseLeave={() => handleAccordionHover(null)}
                >
                  <Box as='span' flex='1' textAlign='center'>
                    Categories
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
              <Flex justifyItems="center" justifyContent='center'>
                    <Box p={2}>
                        <Image src='/webr.png' boxSize="100px" />Wireless Earbuds</Box> 
                    <Box p={2}>
                        <Image src='swbr.png' boxSize="100px" />Smart Watch</Box>
                </Flex>
                <Flex justifyItems="center" justifyContent='center'>
                    <Box p={2}>
                        <Image src='/cabr.png' boxSize="100px" />Car Accessories</Box> 
                    <Box p={2}>
                        <Image src='/wsbr.png' boxSize="100px" />Wireless Speakers</Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box as='span' ml={4} borderBottom={activeAccordion === 1 ? '2px solid black' : 'none'} onMouseEnter={() => handleAccordionHover(1)} onMouseLeave={() => handleAccordionHover(null)}>boAt Personalisation</Box>
        <Box as='span' ml={4} borderBottom={activeAccordion === 2 ? '2px solid black' : 'none'} onMouseEnter={() => handleAccordionHover(2)} onMouseLeave={() => handleAccordionHover(null)}>Gift with boAt</Box>
        <Box as='span' ml={4} borderBottom={activeAccordion === 3 ? '2px solid black' : 'none'} onMouseEnter={() => handleAccordionHover(3)} onMouseLeave={() => handleAccordionHover(null)}>Corporate Orders</Box>

        {/* Corporate Orders Accordion */}
        <Box as='span' ml={4}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  borderBottom={activeAccordion === 4 ? '2px solid black' : 'none'}
                  onMouseEnter={() => handleAccordionHover(4)}
                  onMouseLeave={() => handleAccordionHover(null)}
                >
                  More
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Box p={2}>Daily Deals</Box>
                <Box p={2}>Do What FloAts Your boAt</Box>
                <Box p={2}>Blogs</Box>
                <Box p={2}>Refer & Earn</Box>
                <Box p={2}>Careers</Box>
                <Box p={2}>Social Responsibility</Box>
                <Box p={2}>Store Locator</Box>
              </AccordionPanel>

            </AccordionItem>
          </Accordion>
        </Box>

        <Box >
          <Input
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            mr={4}
            style={{
              height: '40px',
              padding: '0 10px',
              borderRadius: '25px',
              backgroundColor: '#f2f2f2',
              width: '200px',
            }}
          />
        </Box>

        {/* User and Shopping Bag Icons */}
        <Box style={{ fontSize: '2rem' }}>
          <CiUser />
        </Box>

        <Box style={{ fontSize: '2rem' }}>
          <HiOutlineShoppingBag />
        </Box>

      </Box>

    </Flex>

  );
};

export default Topbar;