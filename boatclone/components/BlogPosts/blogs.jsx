import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Latest from './latest'
import Popular from './popular'


const Blogs = () => {
  return <>
  <Flex direction="column" align="center">
  <Text fontSize="2xl" fontWeight="normal" mt={4} textAlign="center">
        <Text as="span" fontWeight="bold">Blogs</Text>
        </Text>
        <Tabs variant='soft-rounded' colorScheme='gray'>
  <TabList>
    <Tab>Latest</Tab>
    <Tab>Popular</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Latest/>
    </TabPanel>
    <TabPanel>
    <Popular/>
    </TabPanel>
  </TabPanels>
</Tabs>
  </Flex>
  </>
}

export default Blogs