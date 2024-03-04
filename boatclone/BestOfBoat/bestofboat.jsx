import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Tabone from './tabone'
import Tabtwo from './tabtwo'
import Tabthree from './tabthree'
import Tabfour from './tabfour'
import Tabfive from './tabfive'

const Bestofboat = () => {
  return <>
  <Flex direction="column" align="center">
  <Text fontSize="2xl" fontWeight="normal" mt={4} textAlign="center">
        Best of <Text as="span" fontWeight="bold">boAt</Text>
        </Text>
        <Tabs variant='soft-rounded' colorScheme='gray'>
  <TabList>
    <Tab>Best Sellers</Tab>
    <Tab>Home Theatre</Tab>
    <Tab>Top Earbuds</Tab>
    <Tab>Top Watches</Tab>
    <Tab>Car Accessories</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Tabone/>
    </TabPanel>
    <TabPanel>
    <Tabtwo/>
    </TabPanel>
    <TabPanel>
    <Tabthree/>
    </TabPanel>
    <TabPanel>
    <Tabfour/>
    </TabPanel>
    <TabPanel>
    <Tabfive/>
    </TabPanel>
  </TabPanels>
</Tabs>
  </Flex>
  </>
}

export default Bestofboat