import React from 'react'
import{Box,Card,CardHeader,CardBody,Heading,Image,CardFooter,Text,Img, Button} from '@chakra-ui/react'
import { projects } from './data'
import { Link, useParams } from 'react-router-dom'

const ProjectDiscription = () => {
const project = projects.filter(project => project.id === Number(useParams().id))
  return (
    <Box className=' w-[100vw] h-[100vh]   flex justify-center items-center flex-col space-y-3'>
          <Link to='..' className='text-yellow-500 text-2xl font-bold p-2 rounded-full bg-slate-100 ring-green-500 ring-1'>⬅️Go back</Link>
        <Card className='max-w-[80%] max-h-[80%] w-[95%]  md:w-auto bg-white shadow-xl rounded-xl overflow-hidden'>
            <CardHeader>
                <Heading>{project[0].title}</Heading>
            </CardHeader>
            <CardBody>
                <Img src={project[0].thumbnail} alt={project[0].title} className='w-full h-[20rem] object-cover object-center rounded-t-xl overflow-hidden ' />
                <Text>{project[0].description}</Text>
            </CardBody>
        </Card>
    </Box>
  )
}

export default ProjectDiscription