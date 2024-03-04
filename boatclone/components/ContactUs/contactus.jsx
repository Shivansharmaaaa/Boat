import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Image src="logobgr.png" alt="Company Logo" width="150px" height="auto" />

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold">Contact Us</Text>
        <Text>Email: contact@boat.com</Text>
        <Text>Phone: 123-456-7890</Text>
        <Text>Address: 123 Boat Street</Text>
      </Box>

      <Box mt={8}>
        <Text fontSize="xl" fontWeight="bold">Send us a Message</Text>
      </Box>
    </Flex>
  );
};

export default ContactUs;