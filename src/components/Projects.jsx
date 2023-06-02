import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Link, Text, Stack, } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
    const [display , setDisplay] = React.useState(true)
    return (
        <Box w={'full'} >
            <SimpleGrid p={'8'} spacing={'3'} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                <Card rounded={'lg'} border={'2px'} borderColor={'black'} m={'2'} p={'1'} >
                    <CardBody>
                        <Image src={'https:dochub.com/darklight3173/Gd71aZOw4QJoQddR2Q9AP3/dall-e-2023-05-25-10-58-54-change-outfit-into-black-suit-2-png?dt=2kKFvsc9wSCZ2A1RLMwx'} alt='' />

                        <Stack direction={'column'} spacing={'3'} p={'2'} mt={'4'}>
                            <Heading>A Project No 1</Heading>
                            <Text>this the which i created for customers and blah bldah blah</Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Link>Click Here to see the Project</Link>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    )
}

export default Projects