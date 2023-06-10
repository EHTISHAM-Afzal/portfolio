import { projects } from './data'
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid,  Text, Stack, border, transition, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Projects = () => {
    return (
        <Box w={'full'} scrollSnapStop={'always'} scrollSnapAlign={'start'} id='projects'  >
            <Heading pl={'10'} textColor={'white'} size={'xl'} as={'h1'} >Projects</Heading>
            <SimpleGrid p={'8'} spacing={'3'} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' alignSelf={'center'}>
            {projects.map((project) => ( 
                <Card rounded={'lg'} key={project.id} h={'md'} boxShadow={'xl'}  _hover={{ boxShadow: '2xl' ,  transform: 'scale(1.02)', border: '1px solid black' , transition: 'all .2s ease-in-out' }} borderColor={'black'} overflow={'hidden'} >
                    <Image src={project.thumbnail} maxH={'55%'}   minH={'55%'} w={'100%'} alt={project.name} objectFit={'cover'} placeItems={'center'}  />
                <CardHeader py={'2'}>
                    <Heading>{project.title}</Heading>
                </CardHeader>
                <CardBody py={'2'} px={'6'} >
                        <Text>{project.description}</Text>
                </CardBody>
                <CardFooter pt={'2'}>
                    <Link pb={'2'} px={'2'} to={`${project.id}`}>Go to Project</Link>
                </CardFooter>
            </Card>
            ))}
            </SimpleGrid>
        </Box>
    )
}

export default Projects