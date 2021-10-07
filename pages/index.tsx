import Sidebar from '../components/Sidebar'
import Container from "../components/Container"
import Navbar from '../components/Navbar'
import SimpleThreeColumns from '../components/SimpleThreeColumns'
import {
  Heading,
  Text,
  Button,
  Flex,
  IconButton
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

const url = 'https://example.io/'
const title = 'Home'
const description = 'Awesome description.'

export default function Home() {
  return (
    <>
      
      <Flex w="100%">
        <Sidebar />
        {/* <Flex
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >

        </Flex> */}
        <Container>
          <Navbar />
          <Heading as="h1" size="3xl">GSEN</Heading>
          <Text fontSize="2xl" my={4}>Apps Engineer.</Text>
          <SimpleThreeColumns />
        </Container>
      </Flex>
    </>
  )
}
