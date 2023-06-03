import { projects } from './data'
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Link, Text, Stack, border, } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import React from 'react'

const Projects = () => {
    return (
        <Box w={'full'}   >
            <SimpleGrid p={'8'} spacing={'3'} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' alignSelf={'center'}>
            {projects.map((project) => ( 
                <Card rounded={'lg'} key={project.id} h={'md'} border={'2px'} _hover={{ boxShadow: '2xl' , borderColor: 'white',  borderWidth : '2px' }} borderColor={'black'} overflow={'hidden'} >
                    <Image src={project.thumbnail} maxH={'55%'}  minH={'55%'} w={'100%'} alt={project.name} objectFit={'cover'} placeItems={'center'}  />
                <CardHeader py={'2'}>
                    <Heading>{project.title}</Heading>
                </CardHeader>
                <CardBody py={'2'} px={'6'} >
                        <Text>{project.description}</Text>
                </CardBody>
                <CardFooter pt={'2'}>
                    <Link pb={'2'} px={'2'} href={project.link} isExternal>Go to Project</Link>
                </CardFooter>
            </Card>
            ))}
            </SimpleGrid>
        </Box>
    )
}

export default Projects