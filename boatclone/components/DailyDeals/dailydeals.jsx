import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const Dailydeals = () => {
  const [remainingTime, setRemainingTime] = useState('')

  useEffect(() => {
    const endTime = moment().add(1, 'hour') 
    const interval = setInterval(() => {
      const duration = moment.duration(endTime.diff(moment()))
      const hours = duration.hours()
      const minutes = duration.minutes()
      const seconds = duration.seconds()

      setRemainingTime(`${hours}h ${minutes}m ${seconds}s`)

      if (duration.asSeconds() <= 0) {
        clearInterval(interval)
        setRemainingTime('Deal Ended')
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Flex direction="column" align="center">
      <Text fontSize="2xl" fontWeight="normal" mt={4}>
        Daily <Text as="span" fontWeight="bold">Deals</Text> 
      </Text>
      <Box position="relative">
        <Image src='/beach.jpeg' h={40} w={1100} borderRadius={10}/>
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Image src='/image1.png' h={100} w={100} borderRadius={50}/>
        </Box>
        <Text position="absolute" bottom={4} right={4} fontSize="xl" fontWeight="bold">Ends in: {remainingTime}</Text>
      </Box>
    </Flex>
  )
}

export default Dailydeals