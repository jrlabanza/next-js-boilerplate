import {
    Flex,
    Stack
} from '@chakra-ui/react'


export default function Container({ children }) {
  return (
    <>
      <Stack
        as="main"
        spacing={8}
        // justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        width="80%"
        px={4}
      >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="100%"
            w="100%"
          >
            {children}
          </Flex>
      </Stack>
    </>
  )
}
