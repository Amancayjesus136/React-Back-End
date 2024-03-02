import React from 'react'
import { Image, Box, Heading, Stack } from '@chakra-ui/react'

const Information = () => {
    return (
        <div>
            <Box display="flex" justifyContent="center" alignItems="center" height="30vh">
        <Image
            borderRadius="100px"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
        />
        </Box>

        <Stack spacing={6}>
            <Heading as='h5' size='sm' display="flex" justifyContent="center" alignItems="center">
            Jesús Amancay Acuña
            </Heading>
        </Stack>
        </div>
    )
}

export default Information
