import React from 'react'
import { Image, Box, Heading, Stack } from '@chakra-ui/react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
                <Heading as='h5' size='sm' display="flex" justifyContent="center" alignItems="center" >
                    Jesús Amancay Acuña
                </Heading>

                <Heading
                    as='h6'
                    size='xs'
                    color='gray' 
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                    Software Developer | Bombero Voluntario
                </Heading>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', alignItems: 'center' }}>
                    <FaTwitter size={30} style={{ marginRight: '20px' }} />
                    <FaFacebook size={30} style={{ marginRight: '20px' }} />
                    <FaInstagram size={30} style={{ marginRight: '20px' }} />
                    <FaLinkedin size={30} />
                </div>

            </Stack>
        </div>
    )
}

export default Information
